import { Block } from '@/shared/utils/block';

export class SettingsList extends Block<{}> {
  protected render(): string {
    return '<ul class="user-data-list"></ul>';
  }
}
