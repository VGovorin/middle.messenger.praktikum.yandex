import { Block } from '@/shared/utils/block';

interface IProps {
  events?: Record<string, unknown>;
  onClick: (id: number | null) => void;
}

export class CreateNewChat extends Block<IProps> {
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
    return '<div class="create-new-chat"></div>';
  }
}
