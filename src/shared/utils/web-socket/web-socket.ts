import { HTTPTransport } from '@/shared/utils/HTTP-transport';
import { User } from '@/types';

const webSocketApi = new HTTPTransport('/chats');

export const createWebSocket = async (chatid: number, user: User) => {
  const response = (await webSocketApi.post(
    `/token/${chatid}`,
  )) as unknown as string;
  const { token } = JSON.parse(response);
  const socket = new WebSocket(
    `wss://ya-praktikum.tech/ws/chats/${user.id}/${chatid}/${token}`,
  );

  let intervalId: ReturnType<typeof setTimeout>;

  socket.addEventListener('open', () => {
    console.log('Соединение установлено');

    socket.send(
      JSON.stringify({
        content: '0',
        type: 'get old',
      }),
    );

    const sendPing = () => {
      socket.send(
        JSON.stringify({
          type: 'ping',
        }),
      );
    };

    intervalId = setInterval(sendPing, 20000);
  });

  socket.addEventListener('close', (event) => {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }
    clearInterval(intervalId);
    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  });

  socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    console.log('Получены данные', data);

    if (data.type === 'pong' || data.type === 'user connected') {
      return;
    }

    const state = window.store.getState();

    if (Array.isArray(data)) {
      window.store.set({
        ...state,
        messages: [...data.reverse()],
      });
    } else {
      window.store.set({
        ...state,
        messages: [...state.messages, data],
      });
    }

    const sendBtn = document.getElementById('send-message-button');

    sendBtn?.addEventListener('click', () => {
      const inputMessage = document.getElementById(
        'input-message-chat',
      ) as HTMLInputElement;

      socket.send(
        JSON.stringify({
          content: inputMessage.value,
          type: 'message',
        }),
      );
    });
  });

  socket.addEventListener('error', (event) => {
    console.log('Ошибка', event);
  });
};
