import { Block } from '@/shared/utils/block';

export class ChangePasswordList extends Block<{}> {
  protected render(): string {
    return `
      {{# SettingsList}}
        {{# SettingItem}}
          <label for="old-password" class="text user-data-description">Old Password</label>
          <input
            id="old-password"
            disabled
            class="text change-input"
            type="password"
            name="oldPassword"
            value="1234"
          />
        {{/SettingItem}}
        {{# SettingItem}}
          <label for="new-password" class="text user-data-description">New Password</label>
          <input
            id="new-password"
            class="text change-input"
            type="password"
            name="newPassword"
            value="qwer1234"
          >
        {{/SettingItem}}
        {{# SettingItem}}
          <label
            for="repeat-new-password"
            class="text user-data-description"
          >
            Repeat the New Password
          </label>
          <input
            id="repeat-new-password"
            class="text change-input"
            type="password"
            name="repeatNewPassword"
            value="qwer1243"
          />
        {{/SettingItem}}
      {{/SettingsList}}
      `;
  }
}