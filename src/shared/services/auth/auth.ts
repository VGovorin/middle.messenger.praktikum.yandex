import { AuthApi } from '@/shared/lib/api/auth';
import { PAGES } from '@/shared/project-constants/pages';
import { apiHasError } from '@/shared/utils/api-has-error';
import { transformUser } from '@/shared/utils/api-transformers';
import { Router } from '@/shared/utils/router';
import { CreateUser, LoginRequestData } from '@/types';

const authApi = new AuthApi();

const getUser = async () => {
  const responseUser = await authApi.me();
  if (apiHasError(responseUser)) {
    throw Error(responseUser.reason);
  }

  const response = JSON.parse(responseUser as unknown as string);
  return transformUser(response);
};

const signin = async (data: LoginRequestData) => {
  const response = await authApi.login(data);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const me = await getUser();

  window.store.set({ user: me });
  Router.go(PAGES.CHAT);
};

const signup = async (data: CreateUser) => {
  const response = await authApi.create(data);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const me = await getUser();
  window.store.set({ user: me });
  Router.go(PAGES.CHAT);
};

const logout = async () => {
  await authApi.logout();
  window.store.set({
    user: null,
    chats: [],
    messages: [],
    currentChatId: null,
  });
  Router.go(PAGES.SIGN_IN);
};

export { signin, signup, logout, getUser };
