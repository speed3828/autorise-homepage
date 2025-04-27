import axios from 'axios';
import emailjs from '@emailjs/browser';

// 환경 변수에서 키를 가져오거나 기본값 사용 (실제 배포 환경에서는 환경 변수 설정 필요)
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_autorise';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_inquiry';

// NHN Cloud SMS API를 위한 설정 (환경 변수로 관리)
const SMS_API_KEY = process.env.NEXT_PUBLIC_SMS_API_KEY || 'YOUR_SMS_API_KEY';
const SMS_API_SECRET = process.env.NEXT_PUBLIC_SMS_API_SECRET || 'YOUR_SMS_API_SECRET';
const SMS_SENDING_NUMBER = process.env.NEXT_PUBLIC_SMS_SENDING_NUMBER || '발신번호'; // 등록된 발신번호
const SMS_API_URL = process.env.NEXT_PUBLIC_SMS_API_URL || 'https://api-sms.cloud.toast.com/sms/v3.0/appKeys/{appKey}/sender/sms';

// 수신자 이메일 및 전화번호
const RECIPIENT_EMAIL = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || 'speed382286@gmail.com';
const RECIPIENT_PHONE = process.env.NEXT_PUBLIC_RECIPIENT_PHONE || '010-4316-3828';

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type NotificationResult = {
  success: boolean;
  emailSent: boolean;
  smsSent: boolean;
  error?: string;
};

/**
 * 이메일과 SMS를 동시에 발송합니다
 */
export const sendNotification = async (data: ContactFormData): Promise<NotificationResult> => {
  let emailSent = false;
  let smsSent = false;
  
  try {
    // 이메일 발송
    await sendEmail(data);
    emailSent = true;
    
    // SMS 발송
    await sendSMS(data);
    smsSent = true;
    
    return {
      success: true,
      emailSent,
      smsSent
    };
  } catch (error) {
    console.error('알림 전송 실패:', error);
    return {
      success: false,
      emailSent,
      smsSent,
      error: error instanceof Error ? error.message : '알 수 없는 오류'
    };
  }
};

/**
 * EmailJS를 통해 이메일을 발송합니다
 */
const sendEmail = async (data: ContactFormData): Promise<void> => {
  // 입력값 검증
  if (!data.name || !data.email || !data.message) {
    throw new Error('이메일 전송에 필요한 데이터가 누락되었습니다.');
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
    to_email: RECIPIENT_EMAIL,
  };

  try {
    // 개발 환경에서는 로그만 출력 (API 키가 설정되지 않은 경우)
    if (EMAILJS_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
      console.log('개발 환경: 이메일 전송 시뮬레이션', templateParams);
      return Promise.resolve();
    }

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    return Promise.resolve();
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    throw new Error('이메일 전송에 실패했습니다.');
  }
};

/**
 * NHN Cloud SMS API를 통해 문자메시지를 발송합니다
 */
const sendSMS = async (data: ContactFormData): Promise<void> => {
  // 입력값 검증
  if (!data.name || !data.email) {
    throw new Error('SMS 전송에 필요한 데이터가 누락되었습니다.');
  }

  try {
    // 개발 환경에서는 로그만 출력 (API 키가 설정되지 않은 경우)
    if (SMS_API_KEY === 'YOUR_SMS_API_KEY') {
      console.log('개발 환경: SMS 전송 시뮬레이션', {
        recipient: RECIPIENT_PHONE,
        message: `[Autorise] ${data.name}님의 문의: ${data.email}`
      });
      return Promise.resolve();
    }

    const apiUrl = SMS_API_URL.replace('{appKey}', SMS_API_KEY);
    const messageContent = `[Autorise] ${data.name}님의 문의: ${data.email} - ${data.message.substring(0, 50)}${data.message.length > 50 ? '...' : ''}`;
    
    const response = await axios.post(
      apiUrl,
      {
        body: messageContent,
        sendNo: SMS_SENDING_NUMBER,
        recipientList: [{ recipientNo: RECIPIENT_PHONE.replace(/-/g, '') }]
      },
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'X-Secret-Key': SMS_API_SECRET
        }
      }
    );
    
    if (response.status !== 200) {
      throw new Error(`SMS 전송 실패: ${response.status}`);
    }
    
    return Promise.resolve();
  } catch (error) {
    console.error('SMS 전송 실패:', error);
    throw new Error('SMS 전송에 실패했습니다.');
  }
}; 