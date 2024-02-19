import { Block } from '@/shared/utils/block';

interface IProps {
  onChange?: () => void;
  events?: Record<string, unknown>;
}

export class ChatAvatar extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }

  protected init(): void {
    this.props.events = {
      change: this.props.onChange,
    };
  }

  protected render(): string {
    const state = window.store.getState();
    const [currentChat] = state.chats.filter(
      (chat) => chat.id === state.currentChatId,
    );

    const title = currentChat?.title;
    const avatar = currentChat?.avatar;

    return `
      <label class="chat-room-header-user-avatar-wrapper">
        <img
          class="chat-room-header-user-avatar"
          alt="${title}"
          width="34"
          height="34"
          src="${avatar || '/plug.svg'}"
        />
        <input type="file" />
      </label>
    `;
  }
}
