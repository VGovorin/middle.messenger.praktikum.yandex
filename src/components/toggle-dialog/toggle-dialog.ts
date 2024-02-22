import { Block } from '@/shared/utils/block';

interface IProps {
  onClick?: () => void;
  events?: Record<string, unknown>;
}

export class ToggleDialog extends Block<IProps> {
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
    return '<button type="button" class="btn-toggle-create-new-chat"></button>';
  }
}
