import { Block } from '@/shared/utils/block';

export class ControllersSettingsList extends Block<{}> {
  protected render(): string {
    return `
      <ul class="list-item-wrapper">
        <li class="user-data-item">
          {{{ Link onClick=handleClickChangeData label="Change Data" type="profile-settings" }}}
        </li>
        <li class="user-data-item">
          {{{ Link
            onClick=handleClickChangePassword
            label="Change Password"
            type="profile-settings"
          }}}
        </li>
        <li class="user-data-item">
          {{{ LogoutButton onClick=handleClickLogout }}}
        </li>
      </ul>
      `;
  }
}
