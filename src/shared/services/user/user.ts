import { UserApi } from '@/shared/lib/api/user';
import { apiHasError } from '@/shared/utils/api-has-error';
import { transformUser } from '@/shared/utils/api-transformers';
import { UserProfileDTO } from '@/types';

const userApi = new UserApi();

const changeAvatar = async (data: FormData) => {
  const responseUser = await userApi.changeAvatar(data);
  if (apiHasError(responseUser)) {
    throw Error(responseUser.reason);
  }

  const response = JSON.parse(responseUser as unknown as string);
  const user = transformUser(response);
  window.store.set({ user });
};

const changeProfile = async (data: UserProfileDTO) => {
  const responseUser = await userApi.changeProfile(data);
  if (apiHasError(responseUser)) {
    throw Error(responseUser.reason);
  }

  const response = JSON.parse(responseUser as unknown as string);
  const user = transformUser(response);
  window.store.set({ user });
};

export { changeAvatar, changeProfile };
