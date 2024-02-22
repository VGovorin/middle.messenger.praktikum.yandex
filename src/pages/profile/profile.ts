import { PAGES } from '@/shared/project-constants/pages';
import { logout } from '@/shared/services/auth';
import { Block } from '@/shared/utils/block';
import { connect } from '@/shared/utils/connect';
import { Router } from '@/shared/utils/router';

interface IProps {
  handleClickBack: () => void;
  handleClickChangeData: () => void;
  handleClickChangePassword: () => void;
  handleClickLogout: () => void;
}

class Profile extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      handleClickBack: () => {
        Router.back();
      },

      handleClickChangeData: () => {
        Router.go(PAGES.CHANGE_COMMON_DATA);
      },

      handleClickChangePassword: () => {
        Router.go(PAGES.CHANGE_PASSWORD);
      },

      handleClickLogout: () => {
        logout();
      },
    });
  }

  protected render(): string {
    return `
      <main>
        {{{ BackButton onClick=handleClickBack }}}
        <div class="container">
          <div class="inner-container">
            {{{ ProfileUserAvatar user=user }}}
            {{{ CommonSettingsList user=user }}}
            {{{ ControllersSettingsList
              handleClickChangeData=handleClickChangeData
              handleClickChangePassword=handleClickChangePassword
              handleClickLogout=handleClickLogout
            }}}
          </div>
        </div>
      </main>
      `;
  }
}

export default connect(({ user }) => ({
  user,
}))(Profile);
