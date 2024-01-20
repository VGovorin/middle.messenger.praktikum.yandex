import { Block } from '@/shared/utils/block';

export class SettingItem extends Block<{}> {
  protected render(): string {
    return '<li class="user-data-item"></li>';
  }
}
