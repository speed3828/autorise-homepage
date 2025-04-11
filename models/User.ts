import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, '사용자 이름을 입력해주세요.'],
    unique: true,
    trim: true,
    maxlength: [20, '사용자 이름은 20자 이하여야 합니다.']
  },
  email: {
    type: String,
    required: [true, '이메일을 입력해주세요.'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      '올바른 이메일 형식이 아닙니다.'
    ]
  },
  password: {
    type: String,
    required: [true, '비밀번호를 입력해주세요.'],
    minlength: [6, '비밀번호는 6자 이상이어야 합니다.'],
    select: false
  },
  name: {
    type: String,
    required: [true, '이름을 입력해주세요.'],
    trim: true,
    maxlength: [20, '이름은 20자 이하여야 합니다.']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  loginAttempts: {
    type: Number,
    default: 0
  },
  lastLoginAttempt: {
    type: Date,
    default: null
  },
  lastLoginIp: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.User || mongoose.model('User', UserSchema); 