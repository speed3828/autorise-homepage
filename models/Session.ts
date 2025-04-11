// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// // dotenv.config(); // 환경 변수 로드

// // Mongoose 연결이 설정되었는지 확인
// if (typeof mongoose.connection === 'undefined' || mongoose.connection.readyState === 0) {
//   mongoose.connect(process.env.MONGODB_URI as string);
// }

// const SessionSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'User'
//   },
//   token: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   expiresAt: {
//     type: Date,
//     required: true
//   },
//   lastActivity: {
//     type: Date,
//     default: Date.now
//   },
//   ipAddress: {
//     type: String,
//     required: true
//   },
//   userAgent: {
//     type: String,
//     required: true
//   }
// }, {
//   timestamps: true
// });

// // 세션 만료 인덱스 생성
// SessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// export default mongoose.models.Session || mongoose.model('Session', SessionSchema); 