export interface ILoginParams {
  email: string;
  password: string;
}

export interface ILoginResponse {
  email: string;
  userId: number;
  token: string;
}

export interface IRegisterParams {
  name: string;
  email: string;
  password: string;
}

export interface IUserInfo {
  id: number;
  username: string;
  email: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  nationality: string;
  country: string;
  zipCode: string;
  state: string;
  city: string;
  street1: string;
  street2: string;
  createdAt: string;
  updatedAt: string;
  isActive2fa: number;
  statusKyc: string;
  wallet: string;
  status: string;
  data: string;
}
