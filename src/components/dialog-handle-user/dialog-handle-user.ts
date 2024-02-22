import { Block } from '@/shared/utils/block';
import { ErrorType } from '@/shared/utils/validators/validators';

interface IProps {
  validate: {
    userId: (value: string) => ErrorType;
  };
}

export class DialogHandleUser extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      validate: {
        userId: (string: string) =>
          string.length === 0
            ? {
                errorMessage: 'The User ID cannot be blank',
                errorStatus: true,
              }
            : {
                errorMessage: '',
                errorStatus: false,
              },
      },
    });
  }

  public getLoginUser() {
    return this.refs.loginUser.value();
  }

  public setError(error: string) {
    this.refs.errorLine.setProps({ error });
  }

  protected render(): string {
    return `
    <dialog id="{{class}}" class="{{class}} display-none">
      {{#Form}}
        {{{ ToggleDialog onClick=toggleDialog }}}
        {{# Fieldset}}
          {{{ Legend title=title }}}
          <div class="form-items-wrapper">
            {{{ Input
              type="text"
              label="User ID"
              autocomplete="off"
              name="loginUser_super"
              ref="loginUser"
              validate=validate.userId
            }}}
          </div>
        {{/Fieldset}}
      {{#FormControllers}}
        {{{ Button label=label type="primary" page="list" onClick=onSave }}}
      {{/FormControllers}}
      {{/Form}}
    </dialog>
  `;
  }
}
