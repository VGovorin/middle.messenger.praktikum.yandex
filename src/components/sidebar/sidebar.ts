import { Block } from '@/shared/utils/block';

export class Sidebar extends Block<{}> {
  protected render(): string {
    return `
      <div class="sidebar">
        {{{ SidebarHeader }}}
        {{{ ChatsList chats=chats openDialog=openDialog }}}
        {{{ CreateNewChat onClick=toggleDialogCreateNewChat }}}
      </div>
      `;
  }
}
