import { Block } from '@/shared/utils/block';

interface IProps {
  value?: string;
  onBlur?: () => void;
  type?: string;
  name?: string;
  events: {
    blur?: () => void;
  };
}

export class SettingItemInputInner extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
  }

  protected render(): string {
    const { value, type, name } = this.props;
    return `
      <input
        id="${name}"
        class="text change-input"
        type="${type}"
        name="${name}"
        value="${value}"
        ref
        onBlur
        size="40"
      />
      `;
  }
}
