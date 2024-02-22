import { PAGES } from '@/shared/project-constants/pages';
import { signin } from '@/shared/services/auth/auth';
import { Block } from '@/shared/utils/block';
import { Router } from '@/shared/utils/router';
import * as validators from '@/shared/utils/validators';
import { ErrorType } from '@/shared/utils/validators/validators';

type ValidateDataFn = (value: string) => ErrorType;

interface IProps {
  validate: {
    login: ValidateDataFn;
    password: ValidateDataFn;
  };
  onLogin: (event: PointerEvent) => void;
  handleClickGoToSignUp: () => void;
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

        signin({
          login,
          password,
        }).catch((error) => {
          this.refs.errorLine.setProps({
            errorMessage: error.reason,
          });
        });

        console.log({
          login,
          password,
        });
      },

      handleClickGoToSignUp: () => {
        Router.go(PAGES.SIGN_UP);
      },
    });
  }

  protected render(): string {
    return `
        <main class="container">
          {{#Form}}
            {{# Fieldset}}
              {{{ Legend title="Sign In"  }}}
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
              {{{ Link onClick=handleClickGoToSignUp label="Sign Up" href="#" }}}
            {{/FormControllers}}
            {{{ ErrorLine errorMessage=errorMessage ref="errorLine"}}}
          {{/Form}}
        </main>
        `;
  }
}
