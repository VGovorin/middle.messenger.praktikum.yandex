import Handlebars from 'handlebars';

export { ChatsList } from './chat-list';

Handlebars.registerHelper('chats', () => {
  return [
    { userName: 'Alice', message: 'Hello!', date: '10:59', notice: 1 },
    { userName: 'Bob', message: 'How are you?', date: '12:05' },
    { userName: 'Charlie', message: 'Nice to meet you!', date: '15:21' },
    { userName: 'David', message: 'Greetings!', date: 'Fri', notice: 4 },
    { userName: 'Eva', message: 'Goodbye!', date: 'Sat' },
    { userName: 'Frank', message: 'See you later!', date: 'Sun', notice: 6 },
    { userName: 'Grace', message: 'Howdy!', date: 'Mon', notice: 7 },
    { userName: 'Henry', message: 'Hey there!', date: '2023-12-22' },
    { userName: 'Ivy', message: "What's up?", date: '2023-12-22' },
    {
      userName: 'Jack',
      message: 'Greetings!',
      date: '2023-12-22',
      notice: 1,
    },
  ];
});
