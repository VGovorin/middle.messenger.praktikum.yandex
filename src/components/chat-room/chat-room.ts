import { Block } from '@/shared/utils/block';

export class ChatRoom extends Block<{}> {
  protected render(): string {
    return `
      {{#if currentChatId}}
        <div class="chat-room-main">
          {{{ ChatRoomHeader
            messages=messages
            currentChatId=currentChatId
            handleClickAddUser=toggleDialogAddUserToChat
            handleClickDeleteUser=toggleDialogDeleteUserFromChat
            handleClickRemoveChat=handleClickRemoveChat
          }}}
          {{{ ChatRoomBody messages=messages }}}
          {{{ ChatRoomFooter onSend=onSend }}}
        </div>
      {{else}}
        <div class="select-chat-container">
          <p
            class="text-fs-12 select-chat-container-message"
          >
            Select a chat room to send a message
          </p>
        </div>
      {{/if}}
    `;
  }
}
