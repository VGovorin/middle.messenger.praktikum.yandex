import { Block } from '@/shared/utils/block';
import { ErrorType } from '@/shared/utils/validators/validators';
import * as validators from '@/shared/utils/validators';

type ValidateDataFn = (value: string) => ErrorType;

interface IProps {
  validate: {
    message: ValidateDataFn;
  };
  onSend: (event: PointerEvent) => void;
}

export class ChatRoomFooter extends Block<{}> {
  constructor(props: IProps) {
    super({
      ...props,
      validate: {
        message: validators.message,
      },

      onSend: (event: PointerEvent) => {
        event.preventDefault();
        const message = this.refs.message.value();

        if (!message) {
          return;
        }

        console.log({
          message,
        });
      },
    });
  }

  protected render(): string {
    return `
      <form class="chat-room-footer">
        <button class="attach-button" type="button" aria-label="button" name="button" >
          <span class="visually-hidden">Attach File</span>
          {{{ SvgIcon width="2rem" height="2rem" name="attach" type="attach" }}}
        </button>
        {{{ InputMessage
          ref="message"
          validate=validate.message
        }}}
        {{{ SendMessageButton onClick=onSend }}}
      </form>
      `;
  }
}
