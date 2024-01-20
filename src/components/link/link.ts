import { Block } from '@/shared/utils/block';

export class Link extends Block<{}> {
  protected render(): string {
    return `
      <a class="link link-{{type}}" href="{{href}}">
          {{label}}
      </a>
      `;
  }
}
