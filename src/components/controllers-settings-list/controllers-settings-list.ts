import { Block } from '@/shared/utils/block';

export class ControllersSettingsList extends Block<{}> {
  protected render(): string {
    return `
      <ul class="list-item-wrapper">
        <li class="user-data-item">
          {{{ Link label="Change Data" type="profile-settings" }}}
        </li>
        <li class="user-data-item">
          {{{ Link label="Change Password" type="profile-settings" }}}
        </li>
        <li class="user-data-item">
          <button class="text exit-button">Exit</button>
        </li>
      </ul>
      `;
  }
}
