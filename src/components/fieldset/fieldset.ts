import { Block } from '@/shared/utils/block';

export class Fieldset extends Block<{}> {
  protected render(): string {
    return '<fieldset class="fieldset"></fieldset>';
  }
}
