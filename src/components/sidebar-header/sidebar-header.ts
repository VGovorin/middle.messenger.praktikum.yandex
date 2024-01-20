import { Block } from '@/shared/utils/block';

export class SidebarHeader extends Block<{}> {
  protected render(): string {
    return `
      <div class="nav-panel-header">
        <a
          class="text-fs-12 profile-link"
          href="#"
        >
          Profile <span class="profile-link-arrow"></span>
        </a>
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
