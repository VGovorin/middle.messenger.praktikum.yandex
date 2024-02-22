import { Block } from '@/shared/utils/block';

interface IProps {
  id?: string;
  label: string;
  onBlur?: () => void;
  classes: string;
  placeholder: string;
  type: string;
  autocomplete?: string;
  name?: string;
  value?: string;
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

export class SettingItem extends Block<IProps, IRefs> {
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
    const { name, value, label, type, id } = this.props;
    return `
      <div>
        <li class="user-data-item">
          <label for="${id}" class="text user-data-description">${label}</label>
          {{{ SettingItemInputInner
            id="${id}"
            class="text change-input"
            type="${type}"
            name="${name}"
            value="${value || ''}"
            ref="input"
            onBlur=onBlur
          }}}
        </li>
        {{{ ErrorLine errorMessage=errorMessage ref="errorLine"}}}
      </div>
      `;
  }
}
