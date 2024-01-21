import { Block } from '@/shared/utils/block';

interface IProps {
  type: 'primary' | 'link';
  label: string;
  page?: string;
  onClick?: () => void;
  events?: Record<string, unknown>;
}

export class Button extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { type, label, page } = this.props;
    return `
        <button
          aria-label="button"
          type="button"
          name="button"
          class="button
          button-${type}" ${page ? `page="${page}"` : ''}
        >
          ${label}
        </button>
        `;
  }
}
