import { Block } from '@/shared/utils/block';
import * as validators from '@/shared/utils/validators';
import { ErrorType } from '@/shared/utils/validators/validators';

type ValidateDataFn = (value: string) => ErrorType;

interface IProps {
  validate: {
    login: ValidateDataFn;
    password: ValidateDataFn;
  };
  onLogin: (event: PointerEvent) => void;
}

export class SignIn extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      validate: {
        login: validators.login,
        password: validators.password,
      },
      onLogin: (event: PointerEvent) => {
        event.preventDefault();
        const login = this.refs.login.value();
        const password = this.refs.password.value();

        if (!login) {
          return;
        }

        console.log({
          login,
          password,
        });
      },
    });
  }

  protected render(): string {
    return `
        <main class="container">
          {{#Form}}
            {{# Fieldset}}
              {{{ Legend title=title  }}}
              <div class="form-items-wrapper">
              {{{ Input
                type="text"
                label="Login"
                autocomplete="username"
                name="login"
                ref="login"
                validate=validate.login
              }}}
              {{{ Input
                type="password"
                label="Password"
                autocomplete="current-password"
                name="password"
                ref="password"
                validate=validate.password
              }}}
              </div>
            {{/Fieldset}}
            {{#FormControllers}}
              {{{ Button label="Sign In" type="primary" page="list" onClick=onLogin }}}
              {{{ Link label="Sign Up" href="#" }}}
            {{/FormControllers}}
          {{/Form}}
        </main>
        `;
  }
}
