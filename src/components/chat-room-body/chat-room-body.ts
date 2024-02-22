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
            datetime=this.time
          }}}
        {{/each}}
      </div>
    `;
  }
}
