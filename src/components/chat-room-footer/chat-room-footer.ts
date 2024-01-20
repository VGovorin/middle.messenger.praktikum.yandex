import { Block } from '@/shared/utils/block';

export class ChatRoomFooter extends Block<{}> {
  protected render(): string {
    return `
      <form class="chat-room-footer">
        <button class="attach-button" type="button" aria-label="button" name="button" >
          <span class="visually-hidden">Attach File</span>
          {{{ SvgIcon width="2rem" height="2rem" name="attach" type="attach" }}}
        </button>
        <label class="label-message-chat" for="message">
          <input
            class="input-message-chat"
            type="text"
            placeholder="Message"
            name="message"
            id="message"
          />
        </label>
        <button class="send-message-button" type="button" aria-label="button" name="button">
          <span class="visually-hidden">Send Message</span>
          {{{ SvgIcon width="1.75rem" height="1.75rem" name="back-arrow" type="send-message" }}}
        </button>
      </form>
      `;
  }
}
