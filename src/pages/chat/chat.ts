import { logout } from '@/shared/services/auth';
import {
  addUserToChat,
  createChat,
  createWSChat,
  deleteUserFromChat,
} from '@/shared/services/chats';
import { deleteChat } from '@/shared/services/chats/chats';
import { initChatPage } from '@/shared/services/init-app';
import { Block } from '@/shared/utils/block';
import { connect } from '@/shared/utils/connect';
import { User } from '@/types';

interface Props {
  logout: () => void;
  openDialog: (id: number) => void;
  closeDialog: () => void;
  onSave: () => void;
  chats: Chat[];
  user: User;
  toggleDialogCreateNewChat: () => void;
  toggleDialogAddUserToChat: () => void;
  toggleDialogDeleteUserFromChat: () => void;
  handleAddUser: () => void;
  handleDeleteUser: () => void;
  handleClickRemoveChat: () => void;
  currentChatId: number;
}

type Refs = {
  createChat: {
    getChatTitle: () => string;
    setError: (value: string) => void;
  };
  addUser: {
    getLoginUser: () => string;
  };
  deleteUser: {
    getLoginUser: () => string;
  };
};

class Chat extends Block<Props, Refs> {
  constructor(props: Props) {
    super({
      ...props,
      logout,
      openDialog: (id) => {
        createWSChat(id, this.props.user);
        window.store.set({
          currentChatId: id,
          isOpenDialogChat: true,
        });
      },

      onSave: () => {
        const chatTitle = this.refs.createChat.getChatTitle();
        if (!chatTitle) {
          this.refs.createChat.setError(
            'Название переписки не может быть пустым',
          );
          return;
        }
        createChat(chatTitle).catch((error) =>
          this.refs.createChat.setError(error),
        );
      },

      toggleDialogCreateNewChat: () => {
        const x = document.getElementById('dialog-create-new-chat');
        x?.classList.toggle('display-none');
      },

      toggleDialogAddUserToChat: () => {
        const x = document.getElementById('dialog-add-user');
        x?.classList.toggle('display-none');
      },

      toggleDialogDeleteUserFromChat: () => {
        const x = document.getElementById('dialog-delete-user');
        x?.classList.toggle('display-none');
      },

      handleAddUser: () => {
        const loginUser = this.refs.addUser.getLoginUser();
        if (!loginUser) {
          return;
        }

        addUserToChat({
          users: [parseInt(loginUser, 10)],
          chatId: this.props.currentChatId,
        });
      },

      handleDeleteUser: () => {
        const loginUser = this.refs.deleteUser.getLoginUser();
        if (!loginUser) {
          return;
        }
        deleteUserFromChat({
          users: [parseInt(loginUser, 10)],
          chatId: this.props.currentChatId,
        });
      },

      handleClickRemoveChat: () => {
        const { currentChatId } = window.store.getState();
        if (currentChatId) {
          deleteChat({
            chatId: currentChatId,
          });
          window.store.set({ currentChatId: null });
        }
      },
    });
    initChatPage();
  }

  protected render(): string {
    return `
      <div class="chat-container">
        <main class="main-grid">
          {{{ Sidebar
            chats=chats
            openDialog=openDialog
            toggleDialogCreateNewChat=toggleDialogCreateNewChat
          }}}
          {{{ ChatRoom
            ref="message"
            validate=validate.message
            chats=chats
            currentChatId=currentChatId
            messages=messages
            toggleDialogAddUserToChat=toggleDialogAddUserToChat
            toggleDialogDeleteUserFromChat=toggleDialogDeleteUserFromChat
            handleClickRemoveChat=handleClickRemoveChat
          }}}
        </main>

        {{{ DialogCreateNewChat
          toggleDialogCreateNewChat=toggleDialogCreateNewChat
          onSave=onSave
          ref="createChat"
        }}}
        {{{ DialogHandleUser
          toggleDialog=toggleDialogAddUserToChat
          onSave=handleAddUser
          label="Add"
          title="Add New User"
          ref="addUser"
          class="dialog-add-user"
        }}}
        {{{ DialogHandleUser
          toggleDialog=toggleDialogDeleteUserFromChat
          onSave=handleDeleteUser
          label="Delete"
          title="Delete User"
          ref="deleteUser"
          class="dialog-delete-user"
        }}}
      </div>
    `;
  }
}

export default connect(({ chats, user, currentChatId, messages }) => ({
  chats,
  user,
  currentChatId,
  messages,
}))(Chat);
