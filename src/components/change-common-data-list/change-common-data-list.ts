import { Block } from '@/shared/utils/block';

export class ChangeCommonDataList extends Block<{}> {
  protected render(): string {
    return `
      {{# SettingsList}}
        {{# SettingItem}}
          <label for="email" class="text user-data-description">Email</label>
          <input
            id="email"
            class="text change-input"
            type="email"
            name="email"
            value="email@email.com"
          />
        {{/SettingItem}}
        {{# SettingItem}}
          <label for="login" class="text user-data-description">Login</label>
          <input
            id="login"
            class="text change-input"
            type="text"
            name="login"
            value="ivanivanov"
          />
        {{/SettingItem}}
        {{# SettingItem}}
          <label for="first_name" class="text user-data-description">First Name</label>
          <input
            id="first_name"
            class="text change-input"
            type="text"
            name="first_name"
            value="Ivan"
          />
        {{/SettingItem}}
        {{# SettingItem}}
          <label for="second_name" class="text user-data-description">Last Name</label>
          <input
            id="second_name"
            class="text change-input"
            type="text"
            name="second_name"
            value="Ivanov"
          />
        {{/SettingItem}}
        {{# SettingItem}}
          <label for="display_name" class="text user-data-description">Display Name</label>
          <input
            id="display_name"
            class="text change-input"
            type="text"
            name="display_name"
            value="Ivan"
          />
        {{/SettingItem}}
        {{# SettingItem}}
          <label for="phone" class="text user-data-description">Phone</label>
          <input
            id="phone"
            class="text change-input"
            type="tel"
            name="phone"
            value="+7 (909) 967 30 30"
          />
        {{/SettingItem}}
      {{/SettingsList}}
      `;
  }
}
