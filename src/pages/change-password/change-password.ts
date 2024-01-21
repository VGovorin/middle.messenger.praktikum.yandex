import { Block } from '@/shared/utils/block';

export class ChangePassword extends Block<{}> {
  protected render(): string {
    return `
      <main>
        {{{ BackButton onClick=onClick }}}
        <div class="container">
          <form class="inner-container">
            {{{ ProfileUserAvatar user-name="Ivan" }}}
            {{{ ChangePasswordList }}}
          </form>
        </div> 
      </main>
      `;
  }
}
