import { baseUrl } from '@/shared/lib/base-url';
import { Block } from '@/shared/utils/block';
import { User } from '@/types';

interface IProps {
  events?: Record<string, unknown>;
  onChange?: () => void;
  user: User;
}

export class UserAvatar extends Block<IProps> {
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
    const avatar = this.props.user?.avatar
      ? `
        <div class="user-avatar-container">
          <img
            width="130"
            height="130"
            class="user-avatar"
            src="${baseUrl.HOST}/resources${this.props.user.avatar}"
          />
        </div>
        `
      : '{{{ SvgIcon width="2.5rem" height="2.5rem" name="default-avatar" }}}';

    return `
    <label for="change-user-avatar-input" class="profile-avatar-wrapper">
      ${avatar}
      <input type="file" id="change-user-avatar" class="change-user-avatar-input" />
      <div class="change-avatar-wrapper">
        <p class="text change-avatar-text">Change Avatar</p>
      </div>
    </label>
    `;
  }
}
