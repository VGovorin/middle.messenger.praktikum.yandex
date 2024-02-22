import { Block } from '@/shared/utils/block';

export class ChatsList extends Block<{}> {
  protected render(): string {
    return `
    <ul class="chats-list">
      {{#each chats}}
        {{{ ChatItem
          openDialog=../openDialog
          lastMessage=lastMessage
          id=id
          unreadCount=unreadCount
          title=title
          message=message
          date=date
          notice=unreadCount
          imageUrl=avatar
        }}}
      {{/each}}
    </ul>
    `;
  }
}
