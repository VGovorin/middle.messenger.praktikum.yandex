import { Block } from '@/shared/utils/block';

export class ChatRoomBody extends Block<{}> {
  protected render(): string {
    return `
      <div class="chat-room-body">
        {{#each messages}}
          {{{ UserMessageWrapper
            type="incoming"
            userId=this.user_id
            message=this.content
            datetime="2023-11-22 11:56"
            date="11:56"
          }}}
        {{/each}}
      </div>
    `;
  }
}
