import { HTTPTransport } from '@/shared/utils/HTTP-transport';
import { APIError, ChatDTO, CreateChat } from '@/types';

const chatApi = new HTTPTransport('/chats');

export class ChatApi {
  async create(data: CreateChat): Promise<void | APIError> {
    return chatApi.post('/', { data });
  }

  async getChats(): Promise<ChatDTO[] | APIError> {
    return chatApi.get<ChatDTO[]>('');
  }
}
