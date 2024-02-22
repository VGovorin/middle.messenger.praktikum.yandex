import { ChatApi } from '@/shared/lib/api/chats';
import { apiHasError } from '@/shared/utils/api-has-error';
import { transformChats } from '@/shared/utils/api-transformers';
import { createWebSocket } from '@/shared/utils/web-socket';
import { AddUserToChat, ChatDTO, ChatId, User } from '@/types';

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

const createWSChat = async (chatId: number, user: User) => {
  const response = await createWebSocket(chatId, user);
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

const changeChatAvatar = async (data: FormData) => {
  const response = await chatApi.changeChatAvatar(data);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const chats = await getChats();
  window.store.set({ chats });
};

const addUserToChat = async (data: AddUserToChat) => {
  const response = await chatApi.addUserToChat(data);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const chats = await getChats();
  window.store.set({ chats });
};

const deleteUserFromChat = async (data: AddUserToChat) => {
  const response = await chatApi.deleteUserFromChat(data);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const chats = await getChats();
  window.store.set({ chats });
};

const deleteChat = async (data: ChatId) => {
  const response = await chatApi.deleteChat(data);
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

export {
  createChat,
  getChats,
  createWSChat,
  changeChatAvatar,
  addUserToChat,
  deleteUserFromChat,
  deleteChat,
};
