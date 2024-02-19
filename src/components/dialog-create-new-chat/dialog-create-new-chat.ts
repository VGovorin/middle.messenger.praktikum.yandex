import { Block } from '@/shared/utils/block';
import { ErrorType } from '@/shared/utils/validators/validators';

interface IProps {
  validate: {
    chatName: (value: string) => ErrorType;
  };
}

export class DialogCreateNewChat extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      validate: {
        chatName: (text: string) =>
          text.length === 0
            ? {
                errorMessage: 'The name of the correspondence cannot be blank',
                errorStatus: true,
              }
            : {
                errorMessage: '',
                errorStatus: false,
              },
      },
    });
  }

  public getChatTitle() {
    return this.refs.chatTitle.value();
  }

  public setError(error: string) {
    this.refs.errorLine.setProps({ error });
  }

  protected render(): string {
    return `
    <div id="dialog-create-new-chat" class="dialog-create-new-chat display-none">
      {{#Form}}
        {{{ ToggleDialog onClick=toggleDialogCreateNewChat }}}
        {{# Fieldset}}
          {{{ Legend title="Create New Chat"  }}}
          <div class="form-items-wrapper">
            {{{ Input
              type="text"
              label="Chat Name"
              autocomplete="off"
              name="login"
              ref="chatTitle"
              validate=validate.chatName
            }}}
          </div>
        {{/Fieldset}}
      {{#FormControllers}}
        {{{ Button label="Create" type="primary" page="list" onClick=onSave }}}
      {{/FormControllers}}
      {{/Form}}
    </div>
  `;
  }
}
