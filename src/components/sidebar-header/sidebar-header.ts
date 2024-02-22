import { PAGES } from '@/shared/project-constants/pages';
import { Block } from '@/shared/utils/block';
import { Router } from '@/shared/utils/router';

interface IProps {
  handleClickGoToProfile: () => void;
}

export class SidebarHeader extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      handleClickGoToProfile: () => {
        Router.go(PAGES.PROFILE);
      },
    });
  }

  protected render(): string {
    return `
      <div class="nav-panel-header">
        {{{ LinkProfile onClick=handleClickGoToProfile }}}
        <div class="chat-search-widget">
          <label class="visually-hidden" for="chat-search-input">Search Chat</label>
          <input
            class="chat-search-input"
            id="chat-search-input"
            name="chat-search-input"
            type="search"
            placeholder=" "
          />
          <span class="chat-search-input-description">
            {{{ SvgIcon width="1.25rem" height="1.25rem" type="search" name="search" }}}
            <span class="text-fs-12 chat-search-input-description-text">Search</span>
          </span>
        </div>
      </div>
      `;
  }
}
