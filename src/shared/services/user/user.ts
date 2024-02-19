import { UserApi } from '@/shared/lib/api/user';
import { PAGES } from '@/shared/project-constants/pages';
import { apiHasError } from '@/shared/utils/api-has-error';
import { transformUser } from '@/shared/utils/api-transformers';
import { Router } from '@/shared/utils/router';
import { Password, UserProfileDTO } from '@/types';

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

const changePassword = async (data: Password) => {
  const responseUser = await userApi.changePassword(data);
  if (apiHasError(responseUser)) {
    throw Error(responseUser.reason);
  }

  Router.go(PAGES.PROFILE);
};

export { changeAvatar, changeProfile, changePassword };
