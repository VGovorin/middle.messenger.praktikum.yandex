import { Block } from '@/shared/utils/block';
import { LastMessage } from '@/types';

interface IProps {
  userName?: string;
  imageUrl?: string;
  message?: string;
  date?: string;
  notice?: number;
  lastMessage: LastMessage | null;
  title: string | null;
  id: number | null;
  unreadCount: number | null;
  events?: Record<string, unknown>;
  openDialog: (id: number | null) => void;
}

export class ChatItem extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }

  protected init(): void {
    this.props.events = {
      click: () => this.props.openDialog(this.props.id),
    };
  }

  protected render(): string {
    const { userName, imageUrl, notice, lastMessage, title } = this.props;

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
            <p class="text chat-item-user-name">${title}</p>
            ${
              lastMessage
                ? `
                <span
                  class="chat-item-date"
                >
                  ${new Date(lastMessage.time).toLocaleDateString()}
                </span>`
                : ''
            }
          </div>
          <div class="chat-item-inner-bottom-container">
            <p class="text-fs-12 chat-item-message">${lastMessage?.content}</p>
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
