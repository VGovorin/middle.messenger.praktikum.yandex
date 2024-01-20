import { Block } from '@/shared/utils/block';

export class ErrorLine extends Block<{}> {
  protected render(): string {
    return `
      <div class="input-text-error-line">
        <p class="input-text-error-line-text">{{errorMessage}}</p>
      </div>
      `;
  }
}
