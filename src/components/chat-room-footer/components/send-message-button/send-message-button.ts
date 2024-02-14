import { Block } from '@/shared/utils/block';

interface IProps {
  onClick?: () => void;
  events?: Record<string, unknown>;
}

export class SendMessageButton extends Block<IProps> {
  protected render(): string {
    return `
      <button
        id="send-message-button"
        class="send-message-button"
        type="button"
        aria-label="button"
        name="button"
      >
        <span class="visually-hidden">Send Message</span>
        {{{ SvgIcon width="1.75rem" height="1.75rem" name="back-arrow" type="send-message" }}}
      </button>
      `;
  }
}
