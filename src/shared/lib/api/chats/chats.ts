import { HTTPTransport } from '@/shared/utils/HTTP-transport';
import { APIError, AddUserToChat, ChatDTO, ChatId, CreateChat } from '@/types';

const chatApi = new HTTPTransport('/chats');

export class ChatApi {
  async create(data: CreateChat): Promise<void | APIError> {
    return chatApi.post('/', { data });
  }

  async getChats(): Promise<ChatDTO[] | APIError> {
    return chatApi.get<ChatDTO[]>('');
  }

  async changeChatAvatar(data: FormData): Promise<ChatDTO[] | APIError> {
    return chatApi.put<ChatDTO[]>('/avatar', { data });
  }

  async addUserToChat(data: AddUserToChat): Promise<void[] | APIError> {
    return chatApi.put('/users', { data });
  }

  async deleteUserFromChat(data: AddUserToChat): Promise<void | APIError> {
    return chatApi.delete('/users', { data });
  }

  async deleteChat(data: ChatId): Promise<void | APIError> {
    return chatApi.delete('', { data });
  }
}
