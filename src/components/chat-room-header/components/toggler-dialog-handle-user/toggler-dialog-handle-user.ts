import { Block } from '@/shared/utils/block';

interface IProps {
  events?: Record<string, unknown>;
  onClick: () => void;
}

export class ToggleDialogHandleUser extends Block<IProps> {
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
      <button class="kebab-button" type="button" aria-label="button" name="button" >
        {{{ SvgIcon width="0.1875rem" height="0.9375rem" name="kebab-menu" type="kebab-menu" }}}
      </button>
    `;
  }
}
