import { Block } from '@/shared/utils/block';

interface IProps {
  classes?: string;
  placeholder?: string;
  onBlur?: () => void;
  type?: string;
  autocomplete?: string;
  name?: string;
  events: {
    blur?: () => void;
  };
}

export class InputInner extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
  }

  protected render(): string {
    const { classes, placeholder, type, autocomplete, name } = this.props;
    return `
      <input
        class="${classes}"
        placeholder="${placeholder || ''}"
        type="${type}"
        autocomplete="${autocomplete}"
        name="${name}"
        id="${name}"
        ref
        onBlur
      />
    `;
  }
}
