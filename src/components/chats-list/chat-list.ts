import { Block } from '@/shared/utils/block';

export class ChatsList extends Block<{}> {
  protected render(): string {
    return `
      <ul class="chats-list">
        {{#each (chats)}}
          {{{ ChatItem userName=userName message=message date=date notice=notice }}}
        {{/each}}
      </ul>
      `;
  }
}
