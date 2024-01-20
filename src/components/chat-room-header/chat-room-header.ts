import { Block } from '@/shared/utils/block';

export class ChatRoomHeader extends Block<{}> {
  protected render(): string {
    return `
      <div class="chat-room-header">
        <div class="chat-room-header-user-container">
          <div class="chat-room-header-user-avatar-wrapper">
            <img
              class="chat-room-header-user-avatar"
              alt="Charlie"
              width="34"
              height="34"
              src="#"
              onerror="this.onerror=null; this.src='/plug.svg'"
            />
          </div>
          <p class="chat-room-header-user-name">Charlie</p>
        </div>
        <button class="kebab-button" type="button" aria-label="button" name="button" >
          {{{ SvgIcon width="0.1875rem" height="0.9375rem" name="kebab-menu" type="kebab-menu" }}}
        </button>
      </div>
      `;
  }
}
