import { changeProfile } from '@/shared/services/user';
import { Block } from '@/shared/utils/block';
import * as validators from '@/shared/utils/validators';
import { ErrorType } from '@/shared/utils/validators/validators';

type ValidateDataFn = (value: string) => ErrorType;

interface IProps {
  validate: {
    login: ValidateDataFn;
    email: ValidateDataFn;
    firstName: ValidateDataFn;
    secondName: ValidateDataFn;
    phone: ValidateDataFn;
    displayName: ValidateDataFn;
  };
  onChange: (event: PointerEvent) => void;
}

export class ChangeCommonDataList extends Block<{}> {
  constructor(props: IProps) {
    super({
      ...props,
      validate: {
        login: validators.login,
        email: validators.email,
        firstName: validators.name,
        secondName: validators.name,
        phone: validators.phone,
        displayName: validators.name,
      },

      onChange: (event: PointerEvent) => {
        event.preventDefault();
        const email = this.refs.email.value();
        const login = this.refs.login.value();
        const firstName = this.refs.first_name.value();
        const secondName = this.refs.second_name.value();
        const phone = this.refs.phone.value();
        const displayName = this.refs.display_name.value();

        if (!login) {
          return;
        }

        changeProfile({
          email,
          login,
          first_name: firstName,
          second_name: secondName,
          phone,
          display_name: displayName,
        });

        console.log({
          login,
          email,
          firstName,
          secondName,
          phone,
          displayName,
        });
      },
    });
  }

  protected render(): string {
    return `
      <div class="container-settings-list">
        {{# SettingsList}}
          {{{ SettingItem
            id="email"
            class="text change-input"
            type="email"
            name="email"
            value=user.email
            label="Email"
            ref="email"
            validate=validate.email
          }}}
          {{{ SettingItem
            id="login"
            class="text change-input"
            type="text"
            name="login"
            value=user.login
            label="Login"
            ref="login"
            validate=validate.login
          }}}
          {{{ SettingItem
            id="first_name"
            class="text change-input"
            type="text"
            name="first_name"
            value=user.firstName
            label="First Name"
            ref="first_name"
            validate=validate.firstName
          }}}
          {{{ SettingItem
            id="second_name"
            class="text change-input"
            type="text"
            name="second_name"
            value=user.secondName
            label="Second Name"
            ref="second_name"
            validate=validate.secondName
          }}}
          {{{ SettingItem
            id="display_name"
            class="text change-input"
            type="text"
            name="display_name"
            value=user.displayName
            label="Display Name"
            ref="display_name"
            validate=validate.displayName
          }}}
          {{{ SettingItem
            id="phone"
            class="text change-input"
            type="tel"
            name="phone"
            value=user.phone
            label="Phone"
            ref="phone"
            validate=validate.phone
          }}}
        {{/SettingsList}}
        {{{ Button label="Save" type="primary" page="list" onClick=onChange }}}
      </div>
      `;
  }
}
