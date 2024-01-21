import { Block } from '@/shared/utils/block';

export class SelectChat extends Block<{}> {
  protected render(): string {
    return `
      <main class="main-grid">
        {{{ Sidebar }}}
        <div class="select-chat-container">
          <p
            class="text-fs-12 select-chat-container-message"
          >
            Select a chat room to send a message
          </p>
        </div>
      </main>
      `;
  }
}
