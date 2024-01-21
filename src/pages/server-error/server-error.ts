import { Block } from '@/shared/utils/block';

export class ServerError extends Block<{}> {
  protected render(): string {
    return `
      <main>
        {{{ MessageError title=title type=type message=message label=label }}}
      </main>
      `;
  }
}
