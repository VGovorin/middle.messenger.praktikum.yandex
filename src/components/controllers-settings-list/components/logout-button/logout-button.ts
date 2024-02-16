import { Block } from '@/shared/utils/block';

interface IProps {
  events?: Record<string, unknown>;
  onClick: () => void;
}

export class LogoutButton extends Block<IProps> {
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
    return `
      <button class="text exit-button">Exit</button>
      `;
  }
}
