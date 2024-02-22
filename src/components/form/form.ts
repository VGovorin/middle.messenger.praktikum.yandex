import { Block } from '@/shared/utils/block';

export class Form extends Block<{}> {
  protected render(): string {
    return '<form method="dialog" class="form"></form>';
  }
}
