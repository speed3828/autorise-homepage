import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

// 환경 변수 또는 기본값 가져오기
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_autorise";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_contact";
const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "6Vra0V82iXBLzHuwe";

// EmailJS 초기화 (public key만 사용)
const initEmailJS = () => {
  // 공개 키는 클라이언트 측에서 사용해도 안전함
  emailjs.init(EMAILJS_USER_ID);
};

// 이메일 전송 함수
export const sendEmail = async (params: EmailParams): Promise<{ success: boolean; message: string }> => {
  try {
    // EmailJS 템플릿에 맞는 파라미터 구성
    const templateParams = {
      from_name: params.name,
      from_email: params.email,
      message: params.message,
    };
    
    // 서비스 ID와 템플릿 ID
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID, // EmailJS 서비스 ID
      EMAILJS_TEMPLATE_ID, // EmailJS 템플릿 ID
      templateParams
    );
    
    if (response.status === 200) {
      return { success: true, message: "문의가 성공적으로 전송되었습니다." };
    } else {
      return { success: false, message: "이메일 전송 중 오류가 발생했습니다. 다시 시도해주세요." };
    }
  } catch (error) {
    console.error("이메일 전송 오류:", error);
    return { 
      success: false, 
      message: "이메일 전송 중 오류가 발생했습니다. 다시 시도해주세요."
    };
  }
};

export default {
  initEmailJS,
  sendEmail
}; 