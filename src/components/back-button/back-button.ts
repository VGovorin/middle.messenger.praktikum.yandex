import { Block } from '@/shared/utils/block';

interface IProps {
  onClick?: () => void;
  events?: Record<string, unknown>;
}

export class BackButton extends Block<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    return `
      <div class="back-button-container">
        <button class="back-button">
          {{{ SvgIcon width="1.75rem" height="1.75rem" name="back-arrow" }}}
        </button>
      </div>
      `;
  }
}
