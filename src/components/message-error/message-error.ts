import { Block } from '@/shared/utils/block';

export class MessageError extends Block<{}> {
  protected render(): string {
    return `
      <div class="container">
        <div class="error-message-container">
          {{{ Heading title=title type=type }}}
          <p class="text error-message-text">{{message}}</p>
          {{{ Link label=label href="#" }}}
        </div>
      </div>
      `;
  }
}
