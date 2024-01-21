import { Block } from '@/shared/utils/block';

interface IProps {
  classes?: string;
  type?: string;
  title: string;
}

export class Heading extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    const { title, type } = this.props;
    return `
      <h1 class="heading heading-${type}">
          ${title}
      </h1>
      `;
  }
}
