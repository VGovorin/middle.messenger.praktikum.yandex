import { PAGES } from '@/shared/project-constants/pages';
import { getUser } from '@/shared/services/auth';
import { getChats } from '@/shared/services/chats';
import { Router } from '@/shared/utils/router';

const initApp = async () => {
  let me = null;
  try {
    me = await getUser();
  } catch (error) {
    console.log(error);
    Router.go(PAGES.SIGN_IN);
    return;
  }
  const chats = await getChats();
  window.store.set({ user: me, chats });

  if (
    window.location.pathname === PAGES.SIGN_IN ||
    window.location.pathname === PAGES.SIGN_UP ||
    window.location.pathname === '/'
  ) {
    Router.go(PAGES.CHAT);
  }
};

const initChatPage = async () => {
  const chats = await getChats();
  window.store.set({ chats });
};

export { initApp, initChatPage };
