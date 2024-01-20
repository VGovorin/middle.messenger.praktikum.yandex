import { Block } from '@/shared/utils/block';

export class Legend extends Block<{}> {
  protected render(): string {
    return `
      <legend class="legend">
        {{{ Heading title=title }}}
      </legend>
      `;
  }
}
