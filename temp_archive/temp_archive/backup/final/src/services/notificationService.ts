import axios from 'axios';
import emailjs from '@emailjs/browser';

// EmailJS 공개 키 (여기에 실제 키를 입력하세요)
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'service_autorise';
const EMAILJS_TEMPLATE_ID = 'template_inquiry';

// NHN Cloud SMS API를 위한 설정 (실제 키로 교체 필요)
const SMS_API_KEY = 'YOUR_SMS_API_KEY';
const SMS_API_SECRET = 'YOUR_SMS_API_SECRET';
const SMS_SENDING_NUMBER = '발신번호'; // 등록된 발신번호
const SMS_API_URL = 'https://api-sms.cloud.toast.com/sms/v3.0/appKeys/{appKey}/sender/sms';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

/**
 * 이메일과 SMS를 동시에 발송합니다
 */
export const sendNotification = async (data: ContactFormData): Promise<void> => {
  try {
    // 이메일 발송
    await sendEmail(data);
    
    // SMS 발송
    await sendSMS(data);
    
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * EmailJS를 통해 이메일을 발송합니다
 */
const sendEmail = async (data: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
    to_email: 'speed382286@gmail.com',
  };

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    return Promise.resolve();
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    return Promise.reject(error);
  }
};

/**
 * NHN Cloud SMS API를 통해 문자메시지를 발송합니다
 */
const sendSMS = async (data: ContactFormData): Promise<void> => {
  // 실제 SMS API 연동 로직
  try {
    const apiUrl = SMS_API_URL.replace('{appKey}', SMS_API_KEY);
    const messageContent = `[Autorise] ${data.name}님의 문의: ${data.email} - ${data.message.substring(0, 50)}${data.message.length > 50 ? '...' : ''}`;
    
    const response = await axios.post(
      apiUrl,
      {
        body: messageContent,
        sendNo: SMS_SENDING_NUMBER,
        recipientList: [{ recipientNo: '010-4316-3828' }]
      },
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'X-Secret-Key': SMS_API_SECRET
        }
      }
    );
    
    if (response.status !== 200) {
      throw new Error('SMS 전송 실패');
    }
    
    return Promise.resolve();
  } catch (error) {
    console.error('SMS 전송 실패:', error);
    return Promise.reject(error);
  }
}; 