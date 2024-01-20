import { Block } from '@/shared/utils/block';

export class ProfileUserAvatar extends Block<{}> {
  protected render(): string {
    return `
      <div>
        <div class="profile-avatar-wrapper">
          {{{ SvgIcon width="2.5rem" height="2.5rem" name="default-avatar" }}}
          <div id="change-avatar" class="change-avatar-wrapper">
            <p class="text change-avatar-text">Change Avatar</p>
          </div>
        </div>
        <h1 class="user-name">{{user-name}}</h1>
      </div>
      `;
  }
}
