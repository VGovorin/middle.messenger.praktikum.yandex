import { changePassword } from '@/shared/services/user';
import { Block } from '@/shared/utils/block';
import * as validators from '@/shared/utils/validators';
import { ErrorType } from '@/shared/utils/validators/validators';

type ValidateDataFn = (value: string) => ErrorType;

interface IProps {
  validate: {
    password: ValidateDataFn;
    reEnterPassword: ValidateDataFn;
  };
  onLogin: (event: PointerEvent) => void;
}

export class ChangePasswordList extends Block<{}> {
  constructor(props: IProps) {
    super({
      ...props,
      validate: {
        oldPassword: validators.password,
        newPassword: validators.password,
        reEnterPassword: validators.password,
      },
      onChange: (event: PointerEvent) => {
        event.preventDefault();
        const oldPassword = this.refs.old_password.value();
        const newPassword = this.refs.new_password.value();
        const reEnterPassword = this.refs.re_enter_password.value();

        if (!newPassword && !reEnterPassword && !oldPassword) {
          return;
        }

        if (newPassword !== reEnterPassword) {
          this.refs.errorLine.setProps({
            errorMessage: `The passwords don't match`,
          });
          return;
        }

        changePassword({
          oldPassword,
          newPassword,
        }).catch((error) => {
          console.log(error.reason);
          this.refs.errorLine.setProps({
            errorMessage: error.reason,
          });
        });

        console.log({
          oldPassword,
          newPassword,
          reEnterPassword,
        });
      },
    });
  }

  protected render(): string {
    return `
      <div class="container-settings-list">
        {{# SettingsList}}
          {{{ SettingItem
            id="old-password"
            class="text change-input"
            type="password"
            name="old_password"
            value=""
            label="Old Password"
            ref="old_password"
            validate=validate.oldPassword
          }}}
          {{{ SettingItem
              id="new-password"
              class="text change-input"
              type="password"
              name="new_password"
              value=""
              label="New Password"
              ref="new_password"
              validate=validate.newPassword
          }}}
          {{{ SettingItem
              id="re_enter_password"
              class="text change-input"
              type="password"
              name="re_enter_password"
              value=""
              label="Repeat the New Password"
              ref="re_enter_password"
              validate=validate.reEnterPassword
          }}}
        {{/SettingsList}}
        {{{ Button label="Save" type="primary" page="list" onClick=onChange }}}
        {{{ ErrorLine errorMessage=errorMessage ref="errorLine"}}}
      </div>
      `;
  }
}
