/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import { Router } from './router.ts';
import { Block } from '../block/block.ts';
import { PAGES } from '../../project-constants/pages.ts';

describe('Router', () => {
  let router: Router;
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    router = new Router('#app');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Should add route correctly', () => {
    router.use('/home', Block);
    expect(router.getRoute('/home' as PAGES)?.match('/home' as PAGES)).to.be
      .true;
  });

  it('Should init on start', () => {
    const stubOnRoute = sandbox.stub(router, 'start');
    router.start();
    expect(stubOnRoute.calledOnce).to.be.true;
  });

  it('Should go back in history', () => {
    const stubBack = sandbox.stub(router, 'back');
    router.back();
    expect(stubBack.calledOnce).to.be.true;
  });

  it('should go forward in history', () => {
    const stubForward = sandbox.stub(router, 'forward');
    router.forward();
    expect(stubForward.calledOnce).to.be.true;
  });

  it('should push history state and navigate to route', () => {
    const stubPushState = sandbox.stub(router, 'go');
    router.go('/about' as PAGES);
    expect(stubPushState.calledOnce).to.be.true;
  });
});
