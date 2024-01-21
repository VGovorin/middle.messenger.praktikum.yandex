import { Block } from '@/shared/utils/block';

interface IProps {
  userName?: string;
  imageUrl?: string;
  message?: string;
  date?: string;
  notice?: number;
}

export class ChatItem extends Block<IProps> {
  protected render(): string {
    const { userName, imageUrl, message, date, notice } = this.props;
    return `
      <li class="chat-item">
        <div class="chat-item-left-container">
          <img
            alt=${userName}
            src=${imageUrl}
            class="chat-item-avatar"
            width="47"
            height="47"
            onerror="this.onerror=null; this.src='/plug.svg'"
          />
        </div>
        <div class="chat-item-right-container">
          <div class="chat-item-inner-top-container">
            <p class="text chat-item-user-name">${userName}</p>
            <span class="chat-item-date">${date}</span>
          </div>
          <div class="chat-item-inner-bottom-container">
            <p class="text-fs-12 chat-item-message">${message}</p>
            {{#if notice}}
              <span class="chat-item-notice-wrapper">
                <span class="chat-item-notice-inner">${notice}</span>
              </span>
            {{/if}}
          </div>
        </div>
      </li>
      `;
  }
}
