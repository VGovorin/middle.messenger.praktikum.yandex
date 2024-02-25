import { PAGES } from '../../project-constants/pages.ts';
import { BlockClass } from '../block/block.ts';
import { Route } from '../route/route.ts';

export class Router {
  private routes: Route[] = [];

  private history: History = window.history;

  private _currentRoute: Route | null = null;

  private _rootQuery;

  private static __instance: Router;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: BlockClass<{}>) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      if (event.currentTarget) {
        const currentTarget = event.currentTarget as Window;
        this._onRoute(currentTarget.location.pathname as PAGES);
      }
    };

    this._onRoute(window.location.pathname as PAGES);
  }

  _onRoute(pathname: PAGES) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: PAGES) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: PAGES) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default new Router('#app');
