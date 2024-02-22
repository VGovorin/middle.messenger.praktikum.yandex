import { Block } from '@/shared/utils/block';

interface IProps {
  handleChangeChangeAvatar: (e: Event) => void;
  currentChatId: number;
}

export class MenuHandleUser extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return `
      <div id="menu-handle-user" class="menu-handle-user display-none">
        <ul class="menu-handle-user-list">
          {{{ ControllerHandleUser
            onClick=handleClickAddUser
            label="Add User"
            svgIconName="add-users"
          }}}
          {{{ ControllerHandleUser
            onClick=handleClickDeleteUser
            label="Delete User"
            svgIconName="delete-users"
          }}}
          {{{ ControllerHandleUser
            onClick=handleClickRemoveChat
            label="Remove Chat"
            svgIconName="trash"
          }}}
        </ul>
      </div>
      `;
  }
}
