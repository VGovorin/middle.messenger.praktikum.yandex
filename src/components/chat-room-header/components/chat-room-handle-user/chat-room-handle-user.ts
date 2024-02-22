import { Block } from '@/shared/utils/block';

interface IProps {
  openDialogHandleUser: () => void;
  handleClickAddUser: () => void;
  handleClickDeleteUser: () => void;
  handleClickRemoveChat: () => void;
}

export class ChatRoomHandleUser extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,

      openDialogHandleUser: () => {
        const dialog = document.getElementById('menu-handle-user');
        dialog?.classList.toggle('display-none');
      },
    });
  }

  protected render(): string {
    return `
      <div class="chat-room-handle-user">
        {{{ ToggleDialogHandleUser onClick=openDialogHandleUser }}}
        {{{ MenuHandleUser
          handleClickAddUser=handleClickAddUser
          handleClickDeleteUser=handleClickDeleteUser
          handleClickRemoveChat=handleClickRemoveChat
        }}}
      </div>
    `;
  }
}
