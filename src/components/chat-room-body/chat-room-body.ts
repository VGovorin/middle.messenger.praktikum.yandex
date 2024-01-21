import { Block } from '@/shared/utils/block';
import template from './chat-room-body.hbs?raw';

export class ChatRoomBody extends Block<{}> {
  protected render(): string {
    return template;
  }
}
