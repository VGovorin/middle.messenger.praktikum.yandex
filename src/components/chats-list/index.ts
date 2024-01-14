import Handlebars from 'handlebars';

export { default as ChatsList } from './chats-list.hbs?raw';

Handlebars.registerHelper('chats', () => {
  return [
    { 'user-name': 'Alice', message: 'Hello!', date: '10:59', notice: 1 },
    { 'user-name': 'Bob', message: 'How are you?', date: '12:05' },
    { 'user-name': 'Charlie', message: 'Nice to meet you!', date: '15:21' },
    { 'user-name': 'David', message: 'Greetings!', date: 'Fri', notice: 4 },
    { 'user-name': 'Eva', message: 'Goodbye!', date: 'Sat' },
    { 'user-name': 'Frank', message: 'See you later!', date: 'Sun', notice: 6 },
    { 'user-name': 'Grace', message: 'Howdy!', date: 'Mon', notice: 7 },
    { 'user-name': 'Henry', message: 'Hey there!', date: '2023-12-22' },
    { 'user-name': 'Ivy', message: "What's up?", date: '2023-12-22' },
    {
      'user-name': 'Jack',
      message: 'Greetings!',
      date: '2023-12-22',
      notice: 1,
    },
  ];
});
