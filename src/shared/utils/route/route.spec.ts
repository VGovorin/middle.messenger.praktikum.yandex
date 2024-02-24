/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import { Route } from './route.ts';
import { Block, BlockClass } from '../block/block.ts';

interface Props {}

type Refs = {};

describe('Route', () => {
  let route: Route;
  let PageClass: typeof Block<Props, Refs>;
  let props: Record<string, any>;
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    class Page extends Block<Props, Refs> {
      constructor(props: Props) {
        super({
          ...props,
        });
      }

      protected render(): string {
        return `<div id="test-container">
                    <span id="test-text">{{text}}</span>
                </div>`;
      }
    }

    PageClass = Page;
    props = { rootQuery: '#app' };
    route = new Route('/home', PageClass as unknown as BlockClass<{}>, props);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Should navigate to the same pathname', () => {
    const renderStub = sandbox.stub(route, 'render');
    route.navigate('/home');
    expect(renderStub.calledOnce).to.be.true;
  });

  it('Should not navigate to a different pathname', () => {
    const renderStub = sandbox.stub(route, 'render');
    route.navigate('/about');
    expect(renderStub.called).to.be.false;
  });

  it('Should match the pathname', () => {
    expect(route.match('/home')).to.be.true;
    expect(route.match('/about')).to.be.false;
  });

  it('Should render the block', () => {
    const renderSpy = sandbox.spy(route, 'render');
    route.render();
    expect(renderSpy.calledOnce).to.be.true;
  });
});
