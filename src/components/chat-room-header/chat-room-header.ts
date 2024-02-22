import { changeChatAvatar } from '@/shared/services/chats';
import { Block } from '@/shared/utils/block';

interface IProps {
  handleChangeChangeAvatar: (e: Event) => void;
  currentChatId: number;
}

export class ChatRoomHeader extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      handleChangeChangeAvatar: (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          const [avatar] = target.files;
          const formData = new FormData();
          formData.append('avatar', avatar);
          formData.append('chatId', this.props.currentChatId.toString());
          console.log(formData.values());
          changeChatAvatar(formData);
        }
      },
    });
  }

  protected render(): string {
    const state = window.store.getState();
    const [currentChat] = state.chats.filter(
      (chat) => chat.id === state.currentChatId,
    );

    const title = currentChat?.title;

    return `
      <div class="chat-room-header">
        <div class="chat-room-header-user-container">
          {{{ ChatAvatar onChange=handleChangeChangeAvatar }}}
          <p class="chat-room-header-user-name">${title}</p>
        </div>
        {{{ ChatRoomHandleUser
          handleClickAddUser=handleClickAddUser
          handleClickDeleteUser=handleClickDeleteUser
          handleClickRemoveChat=handleClickRemoveChat
        }}}
      </div>
      `;
  }
}
