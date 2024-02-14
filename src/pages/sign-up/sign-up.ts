import { signup } from '@/shared/services/auth';
import { Block } from '@/shared/utils/block';
import * as validators from '@/shared/utils/validators';
import { ErrorType } from '@/shared/utils/validators/validators';

type ValidateDataFn = (value: string) => ErrorType;

interface IProps {
  validate: {
    login: ValidateDataFn;
    password: ValidateDataFn;
    email: ValidateDataFn;
    firstName: ValidateDataFn;
    secondName: ValidateDataFn;
    phone: ValidateDataFn;
    reEnterPassword: ValidateDataFn;
  };
  onLogin: (event: PointerEvent) => void;
}

export class SignUp extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      validate: {
        login: validators.login,
        password: validators.password,
        email: validators.email,
        firstName: validators.name,
        secondName: validators.name,
        phone: validators.phone,
        reEnterPassword: validators.reEnterPassword,
      },

      onLogin: (event: PointerEvent) => {
        event.preventDefault();
        const email = this.refs.email.value();
        const login = this.refs.login.value();
        const firstName = this.refs.first_name.value();
        const secondName = this.refs.second_name.value();
        const phone = this.refs.phone.value();
        const password = this.refs.password.value();
        const reEnterPassword = this.refs.re_enter_password.value();

        if (!login) {
          return;
        }

        signup({
          login,
          password,
          email,
          first_name: firstName,
          phone,
          second_name: secondName,
        }).catch((error) => {
          this.refs.error.setProps({ error });
          console.log(error);
        });

        console.log({
          email,
          login,
          firstName,
          secondName,
          phone,
          password,
          reEnterPassword,
        });
      },
    });
  }

  protected render(): string {
    return `
      <main class="container">
        {{#Form}}
          {{#Fieldset }}
            {{{ Legend title=title }}}
            <div class="form-items-wrapper">
              {{{ Input
                type="email"
                label="Email Address"
                autocomplete="email"
                name="email"
                ref="email"
                validate=validate.email
              }}}
              {{{ Input
                type="text"
                label="Login"
                autocomplete="off"
                name="login"
                ref="login"
                validate=validate.login
              }}}
              {{{ Input
                type="text"
                label="First Name"
                autocomplete="given-name"
                name="first_name"
                ref="first_name"
                validate=validate.firstName
              }}}
              {{{ Input
                type="text"
                label="Last Name"
                autocomplete="family-name"
                name="second_name"
                ref="second_name"
                validate=validate.secondName
              }}}
              {{{ Input
                type="tel"
                label="Phone Number"
                autocomplete="tel"
                name="phone"
                ref="phone"
                validate=validate.phone
              }}}
              {{{ Input
                type="password"
                label="Password"
                autocomplete="new-password"
                name="password"
                ref="password"
                validate=validate.password
              }}}
              {{{ Input
                type="password"
                label="Re-enter Password"
                autocomplete="new-password"
                name="re_enter_password"
                ref="re_enter_password"
                validate=validate.reEnterPassword
              }}}
            </div>
          {{/Fieldset}}
          {{#FormControllers}}
            {{{ Button label="Create Account" type="primary" page="list" onClick=onLogin }}}
            {{{ Link label="Sign In" href="#" }}}
          {{/FormControllers}}
        {{/Form}}
      </main>
      `;
  }
}
