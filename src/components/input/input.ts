import { Block } from '@/shared/utils/block';

interface IProps {
  label: string;
  onBlur?: () => void;
  classes: string;
  placeholder: string;
  type: string;
  autocomplete?: string;
  name?: string;
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

export class Input extends Block<IProps, IRefs> {
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
    const { type, autocomplete, name } = this.props;
    return `
      <label class="input-container" for={{name}}>
        {{{ InputInner
          classes="input-element"
          placeholder="  "
          type="${type}"
          autocomplete="${autocomplete}"
          name="${name}"
          id="${name}"
          ref="input"
          onBlur=onBlur
        }}}
        <span class="text input-label">{{label}}</span>
        {{{ ErrorLine errorMessage=errorMessage ref="errorLine"}}}
      </label> 
    `;
  }
}
