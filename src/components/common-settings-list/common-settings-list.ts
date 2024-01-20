import { Block } from '@/shared/utils/block';

export class CommonSettingsList extends Block<{}> {
  protected render(): string {
    return `
      {{# SettingsList}}
        {{# SettingItem}}
          <p class="text user-data-description">Email</p>
          <p class="text user-data">email@email.com</p>
        {{/SettingItem}}
        {{# SettingItem}}
          <p class="text user-data-description">Login</p>
          <p class="text user-data">ivanivanov</p>
        {{/SettingItem}}
        {{# SettingItem}}
          <p class="text user-data-description">First Name</p>
          <p class="text user-data">Ivan</p>
        {{/SettingItem}}
        {{# SettingItem}}
          <p class="text user-data-description">Last Name</p>
          <p class="text user-data">Ivanov</p>
        {{/SettingItem}}
        {{# SettingItem}}
          <p class="text user-data-description">Display Name</p>
          <p class="text user-data">Ivan</p>
        {{/SettingItem}}
        {{# SettingItem}}
          <p class="text user-data-description">Phone</p>
          <p class="text user-data">+7 (909) 967 30 30</p>
        {{/SettingItem}}
      {{/SettingsList}}
      `;
  }
}
