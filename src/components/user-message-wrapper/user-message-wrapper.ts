import { Block } from '@/shared/utils/block';

interface IProps {
  userId: number;
  datetime: string;
}

export class UserMessageWrapper extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    const { userId, datetime } = this.props;
    const typeOfMessage =
      userId === window.store.getState().user?.id ? 'outgoing' : 'incoming';

    const hours = `${new Date(datetime).getHours()}:${new Date(datetime).getMinutes()}`;
    return `
      <div class="{{#if message}}wrapper-message{{/if}} wrapper-${typeOfMessage}-message">
        {{#if image}}
          <div class="attach-image-wrapper">
            <img
              class="attach-image"
              alt="Attach Image"
              src="/attach-image.webp"
              width="316" height="211"
            />
          </div>
        {{else}}
          <div class="inner-wrapper-message {{type}}-message">
            <p class="{{type}}-message-text message-text">
              {{message}}
            </p>
          </div>
        {{/if}}
        <div class="meta-data-chat-message-container">
          <span class="meta-data-chat-message">
            <time datetime="{{datetime}}">${hours}</time>
          </span>
          {{#if messageStatusRead}}
            {{{ SvgIcon
              width="0.75rem"
              height="0.35rem"
              name="indicator-message-status"
              type="indicator-message-status-read"
            }}}
          {{/if}}
          {{#if messageStatusUnread}}
            {{{ SvgIcon
              width="0.75rem"
              height="0.35rem"
              name="indicator-message-status"
              type="indicator-message-status-unread"
            }}}
          {{/if}}
        </div>
      </div>
      `;
  }
}
