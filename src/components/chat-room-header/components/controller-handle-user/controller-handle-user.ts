import { Block } from '@/shared/utils/block';

interface IProps {
  onClick?: () => void;
  events?: Record<string, unknown>;
  svgIconName: string;
}

export class ControllerHandleUser extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { svgIconName } = this.props;
    return `
      <li class="dialog-handle-user-item">
        <button class="dialog-handle-user-btn">
          {{{ SvgIcon width="1.375rem" height="1.375rem" name="${svgIconName}" }}}
          <span>{{label}}</span>
        </button>
      </li>
    `;
  }
}
