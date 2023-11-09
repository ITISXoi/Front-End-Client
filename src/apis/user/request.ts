import { request } from '../axios';
import { ILoginParams, ILoginResponse, IRegisterParams, IUserInfo } from './types';

export const loginRequest = async (params: ILoginParams): Promise<ILoginResponse> => {
  const res: any = await request({
    url: `/user/login`,
    method: 'POST',
    data: params,
  });

  return res?.data;
};

export const registerRequest = async (params: IRegisterParams): Promise<any> => {
  const res: any = await request({
    url: `/user/register`,
    method: 'POST',
    data: params,
  });

  return res?.data;
};

export const logoutRequest = async () => {
  return await request({
    url: '/user/logout',
    method: 'POST',
  });
};

export const changePasswordRequest = async (params: { oldPassword: string; newPassword: string }): Promise<any> => {
  const { data } = await request({
    url: `/user/update-password`,
    method: 'POST',
    data: params,
  });
  return data;
};

export const sendMailResetPasswordRequest = async (params: { email: string }) => {
  return await request({
    url: '/user/send-mail-reset-password',
    method: 'POST',
    data: params,
  });
};

export const resetPasswordRequest = async (params: { token: string; password: string }) => {
  return await request({
    url: '/user/reset-password',
    method: 'POST',
    data: params,
  });
};

export const userInfo = async (): Promise<IUserInfo> => {
  const res: any = await request({
    url: `/user/me`,
    method: 'GET',
  });
  return res?.data;
};
