export type AppState = {
  error: string | null;
  user: User | null;
  isOpenDialogChat: boolean;
  chats: Chat[];
  messages: MessageDTO[];
  currentChatId: number | null;
};

export type User = {
  id: number;
  login: string;
  firstName: string;
  secondName: string;
  displayName: string;
  avatar: string;
  phone: string;
  email: string;
};

export type LastMessage = {
  user: User;
  time: string;
  content: string;
};

export type Chat = {
  id: number;
  title: string;
  avatar: string | null;
  unreadCount: number;
  lastMessage: LastMessage | null;
};

export type APIError = {
  reason: string;
};

export type SignUpResponse = {
  id: number;
};

export type UserDTO = {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  avatar: string;
  phone: string;
  email: string;
};

export type CreateUser = Omit<UserDTO, 'avatar' | 'display_name' | 'id'> & {
  password: string;
};

export type CreateChat = {
  title: string;
};

export type LoginRequestData = {
  login: string;
  password: string;
};

export type ChatDTO = {
  id: number;
  title: string;
  avatar: string | null;
  unread_count: number;
  last_message: LastMessage | null;
};

export type FileDTO = {
  id: number;
};

export type MessageDTO = {
  chat_id: number;
  content: string;
  file: FileDTO | null;
  id: number;
  is_read: boolean;
  time: string;
  type: string;
  user_id: number;
};

export type Message = Pick<
  MessageDTO,
  'content' & 'file' & 'id' & 'time' & 'type'
> & {
  chatId: number;
  isRead: boolean;
  userId: number;
};
