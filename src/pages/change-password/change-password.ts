import { Block } from '@/shared/utils/block';
import { connect } from '@/shared/utils/connect';
import { Router } from '@/shared/utils/router';

interface IProps {
  handleClickBack: () => void;
}

class ChangePassword extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,

      handleClickBack: () => {
        Router.back();
      },
    });
  }

  protected render(): string {
    return `
      <main>
        {{{ BackButton onClick=handleClickBack }}}
        <div class="container">
          <form class="inner-container">
            {{{ ProfileUserAvatar user=user }}}
            {{{ ChangePasswordList }}}
          </form>
        </div> 
      </main>
      `;
  }
}

export default connect(({ user }) => ({
  user,
}))(ChangePassword);
