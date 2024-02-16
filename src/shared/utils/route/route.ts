import { Block } from '@/shared/utils/block';
import { BlockClass } from '@/shared/utils/block/block';

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render(query: string, block: Block<{}>) {
  const root = document.querySelector(query);
  if (root) {
    root.innerHTML = '';
    root.append(block.getContent()!);
  }

  return root;
}

export class Route {
  private _pathname: string;

  private _blockClass: BlockClass<{}>;

  private _block: Block<{}> | null;

  private _props;

  constructor(
    pathname: string,
    view: BlockClass<{}>,
    props: Record<string, any>,
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    this._block = new this._blockClass({});
    if (this._block) {
      render(this._props.rootQuery, this._block);
    }
  }
}
