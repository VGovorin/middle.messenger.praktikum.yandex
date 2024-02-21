import * as Pages from '@/pages';

export enum PAGES {
  SIGN_IN = '/',
  SIGN_UP = '/sign-up',
  NOT_FOUND = '/not-found',
  SERVER_ERROR = '/server-error',
  PROFILE = '/profile',
  CHANGE_PASSWORD = '/change-password',
  CHANGE_COMMON_DATA = '/settings',
  CHAT = '/messenger',
}

export const listOfPages = {
  [PAGES.SIGN_IN]: Pages.SignIn,
  [PAGES.SIGN_UP]: Pages.SignUp,
  [PAGES.NOT_FOUND]: Pages.NotFound,
  [PAGES.SERVER_ERROR]: Pages.ServerError,
  [PAGES.PROFILE]: Pages.Profile,
  [PAGES.CHANGE_COMMON_DATA]: Pages.ChangeCommonData,
  [PAGES.CHANGE_PASSWORD]: Pages.ChangePassword,
  [PAGES.CHAT]: Pages.Chat,
};
