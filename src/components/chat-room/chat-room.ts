import { Block } from '@/shared/utils/block';

export class ChatRoom extends Block<{}> {
  protected render(): string {
    return `
      <div class="chat-room-main">
        {{{ ChatRoomHeader}}}
        {{{ ChatRoomBody }}}
        {{{ ChatRoomFooter }}}
      </div>  
    `;
  }
}
