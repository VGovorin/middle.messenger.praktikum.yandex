import { PAGES } from '@/shared/project-constants/pages';
import { getUser } from '@/shared/services/auth';
import { getChats } from '@/shared/services/chats';
import { navigate } from '@/shared/utils/navigate';

const initApp = async () => {
  let me = null;
  try {
    me = await getUser();
  } catch (error) {
    console.log(error);
    navigate(PAGES.SIGN_IN);
    return;
  }
  const chats = await getChats();
  window.store.set({ user: me, chats });
  navigate(PAGES.CHAT);
};

const initChatPage = async () => {
  const chats = await getChats();
  window.store.set({ chats });
};

export { initApp, initChatPage };
