import Handlebars from 'handlebars';
import * as Pages from './pages';
import * as Components from './components';

interface PageContext {
  title: string;
}

const pages = {
  'sign-in': [Pages.SignIn, { title: 'Sign In' }],
  'sign-up': [Pages.SignUp, { title: 'Sign Up' }],
  'not-found': [Pages.NotFound, { title: '404', message: 'Not Found Page', label: 'Back to Chats', type: 'error' }],
  'server-error': [Pages.NotFound, { title: '500', message: "We're already fixing", label: 'Back to Chats', type: 'error' }],
  'profile': [Pages.Profile, { title: 'Profile' }],
  'change-common-data': [Pages.ChangeCommonData, { title: 'Change Common Data' }],
  'change-password': [Pages.ChangePassword, { title: 'Change Password' }],
  'select-chat': [Pages.SelectChat, { title: 'Select Chat' }],
  'chat': [Pages.Chat, { title: 'Chat' }],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

const onClick = (e: MouseEvent) => {
  const link = e.target as HTMLAnchorElement;
  const root = document.getElementById('app');
  const dataPageName = link.dataset.pageName;
  const [source, context] = pages[dataPageName as keyof typeof pages];

  if (root) {
    root.innerHTML = Handlebars.compile(source)(context);
  };
};

const getListPages = () => {
  const root = document.getElementById('app');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.classList.add('page-list');

  Object.entries(pages).forEach(([page, context]) => {
    const [, data] = context;
    const li = document.createElement('li');
    li.classList.add('page-item');
    const a = document.createElement('a');
    a.dataset.pageName = page;
    a.addEventListener('click', onClick);
    a.href = '#';
    a.textContent = `${(data as PageContext).title} page`;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  root?.appendChild(nav);
};

document.addEventListener('DOMContentLoaded', getListPages);
