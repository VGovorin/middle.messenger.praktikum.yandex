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
        password: validators.password,
        reEnterPassword: validators.reEnterPassword,
      },
      onChange: (event: PointerEvent) => {
        event.preventDefault();
        const password = this.refs.password.value();
        const reEnterPassword = this.refs.re_enter_password.value();

        if (!password) {
          return;
        }

        console.log({
          password,
          reEnterPassword,
        });
      },
    });
  }

  protected render(): string {
    return `
      <div class="container-settings-list">
        {{# SettingsList}}
          <li class="user-data-item">
            <label for="old-password" class="text user-data-description">Old Password</label>
            <input
              id="old-password"
              class="text change-input"
              type="password"
              disabled
              value="1234"
            >
          </li>
          {{{ SettingItem
              id="new-password"
              class="text change-input"
              type="password"
              name="password"
              value="qwer1234"
              label="New Password"
              ref="password"
              validate=validate.password
          }}}
          {{{ SettingItem
              id="re_enter_password"
              class="text change-input"
              type="password"
              name="re_enter_password"
              value="qwer1243"
              label="Repeat the New Password"
              ref="re_enter_password"
              validate=validate.reEnterPassword
          }}}
        {{/SettingsList}}
        {{{ Button label="Save" type="primary" page="list" onClick=onChange }}}
      </div>
      `;
  }
}
