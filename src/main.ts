import * as Components from '@/components';
import { registerComponent } from '@/shared/utils/register-component';
import { navigate } from '@/shared/utils/navigate';
import { Block } from '@/shared/utils/block';
import {
  PAGES,
  listOfPagesWithContext,
} from '@/shared/project-constants/pages';

Object.entries(Components).forEach(([name, component]) => {
  registerComponent(name, component as typeof Block);
});

const onClick = (e: MouseEvent) => {
  const link = e.target as HTMLAnchorElement;
  const dataPageName = link.dataset.pageName as PAGES | undefined;

  navigate(dataPageName || PAGES.SIGN_IN);
};

const getListPages = () => {
  const root = document.getElementById('app');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.classList.add('page-list');

  Object.entries(listOfPagesWithContext).forEach(([page, context]) => {
    const [, data] = context;
    const li = document.createElement('li');
    li.classList.add('page-item');
    const a = document.createElement('a');
    a.dataset.pageName = page;
    a.addEventListener('click', onClick);
    a.href = '#';
    a.textContent = `${data.title} page`;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  root?.appendChild(nav);
};

document.addEventListener('DOMContentLoaded', getListPages);
