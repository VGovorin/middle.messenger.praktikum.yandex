import {
  PAGES,
  listOfPagesWithContext,
} from '@/shared/project-constants/pages';

export const navigate = (pageName: PAGES) => {
  const app = document.getElementById('app');

  const [Component, props] = listOfPagesWithContext[pageName];
  const component = new Component(props);

  if (app) {
    app.innerHTML = '';
    app.append(component.getContent()!);
  }
};
