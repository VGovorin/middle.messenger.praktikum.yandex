import { Block } from '@/shared/utils/block';

export class Chat extends Block<{}> {
  protected render(): string {
    return `
      <main class="main-grid">
        {{{ Sidebar }}}
        {{{ ChatRoom ref="message" validate=validate.message onSend=onSend }}}
      </main>
      `;
  }
}
