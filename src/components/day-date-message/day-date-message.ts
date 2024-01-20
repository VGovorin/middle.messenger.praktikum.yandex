import { Block } from '@/shared/utils/block';

interface IProps {
  datetime: string;
  date?: string;
}

export class DayDateMessage extends Block<IProps> {
  protected render(): string {
    const { datetime, date } = this.props;

    return `
      <p class="text-fs-12 day-date-message">
        <time datetime=${datetime}>${date}</time>
      </p>
      `;
  }
}
