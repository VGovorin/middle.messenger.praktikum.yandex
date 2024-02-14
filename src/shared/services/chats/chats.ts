import { ChatApi } from '@/shared/lib/api/chats';
import { apiHasError } from '@/shared/utils/api-has-error';
import { transformChats } from '@/shared/utils/api-transformers';
import { createWebSocket } from '@/shared/utils/web-socket';
import { ChatDTO, User } from '@/types';

const chatApi = new ChatApi();

const getChats = async () => {
  const responseChat = await chatApi.getChats();
  if (apiHasError(responseChat)) {
    throw Error(responseChat.reason);
  }

  const response: ChatDTO[] = JSON.parse(responseChat as unknown as string);

  return transformChats(response);
};

const createChat = async (title: string) => {
  const response = await chatApi.create({ title });
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const responseChat = await chatApi.getChats();
  if (apiHasError(responseChat)) {
    throw Error(responseChat.reason);
  }

  const chats = await getChats();
  window.store.set({ chats });
};

const createWSChat = async (chatid: number, user: User) => {
  const response = await createWebSocket(chatid, user);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }
  const responseChat = await chatApi.getChats();
  if (apiHasError(responseChat)) {
    throw Error(responseChat.reason);
  }

  const chats = await getChats();
  window.store.set({ chats });
};

export { createChat, getChats, createWSChat };
