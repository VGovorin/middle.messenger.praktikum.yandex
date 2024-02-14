import { Block } from '@/shared/utils/block';
import { Chat } from '@/types';

interface IProps {
  chats: Chat[];
}

export class Sidebar extends Block<{}> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return `
      <div class="sidebar">
        {{{ SidebarHeader }}}
        {{{ ChatsList chats=chats openDialog=openDialog }}}
      </div>
      `;
  }
}
