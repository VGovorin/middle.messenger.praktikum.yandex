import { logout } from '@/shared/services/auth';
import { createChat, createWSChat } from '@/shared/services/chats';
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
}

type Refs = {
  createChat: {
    getChatTitle: () => string;
    setError: (value: string) => void;
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
      closeDialog: () => window.store.set({ isOpenDialogChat: false }),
      onSave: () => {
        const chatTitle = this.refs.createChat.getChatTitle();
        if (!chatTitle) {
          this.refs.createChat.setError(
            'Название переписки не может быть пустым',
          );
          return;
        }
        createChat(chatTitle)
          .then(() => window.store.set({ isOpenDialogChat: false }))
          .catch((error) => this.refs.createChat.setError(error));
      },
    });
    initChatPage();
  }

  protected render(): string {
    return `
      <main class="main-grid">
        {{{ Sidebar chats=chats openDialog=openDialog }}}
        {{{ ChatRoom
          ref="message"
          validate=validate.message
          chats=chats
          currentChatId=currentChatId
          messages=messages
        }}}
      </main>
      `;
  }
}

export default connect(({ chats, user, currentChatId, messages }) => ({
  chats,
  user,
  currentChatId,
  messages,
}))(Chat);
