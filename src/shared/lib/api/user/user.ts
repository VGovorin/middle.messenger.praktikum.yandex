import { HTTPTransport } from '@/shared/utils/HTTP-transport';
import { APIError, Password, UserDTO, UserProfileDTO } from '@/types';

const userApi = new HTTPTransport('/user');

export class UserApi {
  async changeAvatar(data: FormData): Promise<UserDTO | APIError> {
    return userApi.put<UserDTO>('/profile/avatar', { data });
  }

  async changeProfile(data: UserProfileDTO): Promise<UserDTO | APIError> {
    return userApi.put<UserDTO>('/profile', { data });
  }

  async changePassword(data: Password): Promise<void | APIError> {
    return userApi.put('/password', { data });
  }
}
