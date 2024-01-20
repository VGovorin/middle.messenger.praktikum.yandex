import { Block } from '@/shared/utils/block';

interface IProps {
  onBlur?: () => void;
  validate: (str: string) => { errorStatus: boolean; errorMessage: string };
  element: {
    value: string;
  };
}

interface NewProps {
  errorMessage: string;
  errorStatus?: boolean;
}

interface IRefs extends IProps {
  input: {
    element: {
      value: unknown;
    };
  };
  errorLine: {
    setProps: (props: NewProps) => void;
  };
}

export class InputMessage extends Block<IProps, IRefs> {
  constructor(props: IProps) {
    super({
      ...props,
      onBlur: () => this.validate(),
    });
  }

  public value() {
    if (!this.validate()) {
      return null;
    }
    return this.refs.input.element.value;
  }

  private validate() {
    const { value } = this.refs.input.element;
    const error = this.props.validate?.(value as string);
    if (error.errorStatus) {
      this.refs.errorLine.setProps({ errorMessage: error?.errorMessage });
      return false;
    }
    this.refs.errorLine.setProps({ errorMessage: error?.errorMessage });
    return true;
  }

  protected render(): string {
    return `
    <label class="label-message-chat" for="message">
      {{{ InputInnerMessage
        ref="input"
        onBlur=onBlur
      }}}
      {{{ ErrorLine errorMessage=errorMessage ref="errorLine"}}}
    </label>
    `;
  }
}
