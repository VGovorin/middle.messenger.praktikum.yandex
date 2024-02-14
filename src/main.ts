import * as Components from '@/components';
import { registerComponent } from '@/shared/utils/register-component';
import { Block } from '@/shared/utils/block';
import { AppState } from '@/types';
import { Store } from '@/shared/utils/store';
import { initApp } from '@/shared/services/init-app';

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
  initApp();
});
