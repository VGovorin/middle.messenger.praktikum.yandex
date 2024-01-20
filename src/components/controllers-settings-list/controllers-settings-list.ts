import { Block } from '@/shared/utils/block';

export class ControllersSettingsList extends Block<{}> {
  protected render(): string {
    return `
      {{# SettingsList}}
        {{# SettingItem}}
          {{{ Link label="Change Data" type="profile-settings" }}}
        {{/SettingItem}}
        {{# SettingItem}}
          {{{ Link label="Change Password" type="profile-settings" }}}
        {{/SettingItem}}
        {{# SettingItem}}
          <button class="text exit-button">Exit</button>
        {{/SettingItem}}
      {{/SettingsList}}
      `;
  }
}
