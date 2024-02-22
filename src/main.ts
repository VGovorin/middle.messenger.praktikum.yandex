import * as Components from '@/components';
import { registerComponent } from '@/shared/utils/register-component';
import { Block } from '@/shared/utils/block';
import { AppState } from '@/types';
import { Store } from '@/shared/utils/store';
import { initApp } from '@/shared/services/init-app';
import { listOfPages } from '@/shared/project-constants/pages';
import { Router } from '@/shared/utils/router';
import { BlockClass } from '@/shared/utils/block/block';

declare global {
  interface Window {
    store: Store<AppState>;
  }

  type Nullable<T> = T | null;
}

const initState: AppState = {
  error: null,
  user: null,
  isOpenDialogChat: false,
  chats: [],
  messages: [],
  currentChatId: null,
};
window.store = new Store<AppState>(initState);

Object.entries(Components).forEach(([name, component]) => {
  registerComponent(name, component as typeof Block);
});

document.addEventListener('DOMContentLoaded', () => {
  Object.entries(listOfPages).forEach(([path, page]) => {
    Router.use(path, page as BlockClass<{}>);
  });
  Router.start();

  initApp();
});
