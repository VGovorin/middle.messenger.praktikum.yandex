import { Block } from '@/shared/utils/block';

interface IProps {
  onBlur?: () => void;
  events: {
    blur?: () => void;
  };
}

export class InputInnerMessage extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
  }

  protected render(): string {
    return `
      <input
        class="input-message-chat"
        type="text"
        placeholder="Message"
        name="message"
        id="input-message-chat"
        ref
        onBlur
      />
      `;
  }
}
