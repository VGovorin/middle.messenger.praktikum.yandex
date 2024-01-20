import { Block } from '@/shared/utils/block';

export class SvgIcon extends Block<{}> {
  protected render(): string {
    return `
      <svg
        style="
        width: {{width}};
        height: {{height}}"
        class="icon icon-{{type}}"
        width="100%"
        height="100%"
      >
        <use href="/iconsSprite.svg#{{name}}"></use>
      </svg>
      `;
  }
}
