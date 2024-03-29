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
    });
  }

  protected render(): string {
    return `
      <form id="form-chat-room-footer" class="chat-room-footer">
        <button
          id="attach-button"
          class="attach-button"
          type="button"
          aria-label="button"
          name="button"
        >
          <span class="visually-hidden">Attach File</span>
          {{{ SvgIcon width="2rem" height="2rem" name="attach" type="attach" }}}
        </button>
        {{{ InputMessage
          ref="message"
          validate=validate.message
        }}}
        {{{ SendMessageButton onSend=onSend }}}
      </form>
      `;
  }
}
