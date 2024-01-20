import * as Pages from '@/pages';
import { Block } from '@/shared/utils/block';

export enum PAGES {
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
  NOT_FOUND = 'not-found',
  SERVER_ERROR = 'server-error',
  PROFILE = 'profile',
  CHANGE_PASSWORD = 'change-password',
  CHANGE_COMMON_DATA = 'change-common-data',
  SELECT_CHAT = 'select-chat',
  CHAT = 'chat',
}

interface Context {
  title: string;
  message?: string;
  label?: string;
  type?: string;
}

interface ListOfPagesWithContext {
  [key: string]: [page: typeof Block<{}>, context: Context];
}

export const listOfPagesWithContext: ListOfPagesWithContext = {
  [PAGES.SIGN_IN]: [Pages.SignIn, { title: 'Sign In' }],
  [PAGES.SIGN_UP]: [Pages.SignUp, { title: 'Sign Un' }],
  [PAGES.NOT_FOUND]: [
    Pages.NotFound,
    {
      title: '404',
      message: 'Not Found Page',
      label: 'Back to Chats',
      type: 'error',
    },
  ],
  [PAGES.SERVER_ERROR]: [
    Pages.ServerError,
    {
      title: '500',
      message: "We're already fixing",
      label: 'Back to Chats',
      type: 'error',
    },
  ],
  [PAGES.PROFILE]: [Pages.Profile, { title: 'Profile' }],
  [PAGES.CHANGE_COMMON_DATA]: [
    Pages.ChangeCommonData,
    { title: 'Change Common Data' },
  ],
  [PAGES.CHANGE_PASSWORD]: [Pages.ChangePassword, { title: 'Change Password' }],
  [PAGES.SELECT_CHAT]: [Pages.SelectChat, { title: 'Select Chat' }],
  [PAGES.CHAT]: [Pages.Chat, { title: 'Chat' }],
};
