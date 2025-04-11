import { randomBytes, createHash } from 'crypto';
import { cookies, headers } from 'next/headers';
import connectDB from '@/lib/mongodb';
import Session from '@/models/Session';

// 환경 변수에서 세션 만료 시간 가져오기 (기본값 1시간)
const SESSION_DURATION = Number(process.env.SESSION_DURATION) || 60 * 60;
const MAX_SESSIONS_PER_USER = 3;
const isProduction = process.env.NODE_ENV === 'production';

// 로깅 유틸리티
const logError = (error: any, context: string) => {
  if (isProduction) {
    // TODO: 실제 로깅 서비스로 전송
    console.error(`[${new Date().toISOString()}] ${context}:`, error);
  } else {
    console.error(`${context}:`, error);
  }
};

export class SessionManager {
  static generateSessionToken(): string {
    // 더 안전한 토큰 생성
    const randomPart = randomBytes(32).toString('hex');
    const timestamp = Date.now().toString();
    const hash = createHash('sha256')
      .update(randomPart + timestamp)
      .digest('hex');
    return `${randomPart}:${hash}`;
  }

  static async setSession(userId: string, isAdmin: boolean) {
    try {
      await connectDB();
      
      // 트랜잭션으로 세션 생성
      const session = await Session.startSession();
      try {
        session.startTransaction();
        
        // 기존 세션 정리
        await this.cleanupOldSessions(userId, session);
        
        const sessionToken = this.generateSessionToken();
        const cookieStore = cookies();
        const headersList = headers();
        
        const expiresAt = new Date(Date.now() + SESSION_DURATION * 1000);
        const ipAddress = headersList.get('x-forwarded-for') || 
                         headersList.get('x-real-ip') || 
                         'unknown';
        const userAgent = headersList.get('user-agent') || 'unknown';
        
        // 세션 저장
        await Session.create([{
          userId,
          token: sessionToken,
          expiresAt,
          ipAddress,
          userAgent
        }], { session });
        
        await session.commitTransaction();
        
        // 쿠키 설정
        cookieStore.set('session', sessionToken, {
          path: '/',
          httpOnly: true,
          secure: isProduction,
          sameSite: 'strict',
          maxAge: SESSION_DURATION
        });
        
        cookieStore.set('isAdmin', isAdmin ? 'true' : 'false', {
          path: '/',
          httpOnly: true,
          secure: isProduction,
          sameSite: 'strict',
          maxAge: SESSION_DURATION
        });

        return sessionToken;
      } catch (error) {
        await session.abortTransaction();
        throw error;
      } finally {
        session.endSession();
      }
    } catch (error) {
      logError(error, 'Session creation');
      throw new Error('세션 생성에 실패했습니다.');
    }
  }

  static async validateSession(sessionToken: string): Promise<boolean> {
    try {
      await connectDB();
      
      const headersList = headers();
      const currentIp = headersList.get('x-forwarded-for') || 
                       headersList.get('x-real-ip') || 
                       'unknown';
      const currentUserAgent = headersList.get('user-agent') || 'unknown';
      
      const session = await Session.findOne({ 
        token: sessionToken,
        expiresAt: { $gt: new Date() }
      });
      
      if (!session) {
        return false;
      }
      
      // IP와 User-Agent 검증
      if (session.ipAddress !== currentIp || 
          session.userAgent !== currentUserAgent) {
        await this.clearSession();
        return false;
      }
      
      // 마지막 활동 시간 업데이트
      session.lastActivity = new Date();
      await session.save();
      
      return true;
    } catch (error) {
      logError(error, 'Session validation');
      return false;
    }
  }

  static async clearSession() {
    try {
      const cookieStore = cookies();
      const sessionToken = cookieStore.get('session')?.value;
      
      if (sessionToken) {
        await connectDB();
        await Session.deleteOne({ token: sessionToken });
      }
      
      cookieStore.delete('session');
      cookieStore.delete('isAdmin');
    } catch (error) {
      logError(error, 'Session cleanup');
    }
  }

  private static async cleanupOldSessions(userId: string, session?: any) {
    try {
      const query = Session.find({ userId }).sort({ lastActivity: -1 });
      if (session) {
        query.session(session);
      }
      
      const sessions = await query;
      
      if (sessions.length >= MAX_SESSIONS_PER_USER) {
        const sessionsToDelete = sessions.slice(MAX_SESSIONS_PER_USER - 1);
        const deleteQuery = Session.deleteMany({
          _id: { $in: sessionsToDelete.map(s => s._id) }
        });
        if (session) {
          deleteQuery.session(session);
        }
        await deleteQuery;
      }
    } catch (error) {
      logError(error, 'Session cleanup');
    }
  }
} 