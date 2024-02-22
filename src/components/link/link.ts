import { Block } from '@/shared/utils/block';

interface IProps {
  events?: Record<string, unknown>;
  onClick: () => void;
}

export class Link extends Block<IProps> {
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
      <a class="link link-{{type}}">
          {{label}}
      </a>
      `;
  }
}
