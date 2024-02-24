/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import sinon from 'sinon';
import { expect } from 'chai';
import { HTTPTransport, METHOD } from './HTTP-transport.ts';
import { baseUrl } from '../../lib/base-url/base-url.ts';

describe('HttpTransport', () => {
  let http: HTTPTransport;
  let requestStub: sinon.SinonStub;

  beforeEach(() => {
    http = new HTTPTransport('/test');
    requestStub = sinon.stub(http, 'request').resolves();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Method GET', async () => {
    await http.get('', { data: { a: '1', b: '22' } });

    const expectedUrl = `${baseUrl.HOST}/test?a=1&b=22`;

    expect(requestStub.calledWithMatch(expectedUrl, { method: METHOD.GET })).to
      .be.true;
  });

  it('Method POST', async () => {
    const data = { a: '1', b: '22' };

    await http.post('', { data });

    const expectedUrl = `${baseUrl.HOST}/test`;

    expect(
      requestStub.calledWithMatch(expectedUrl, { method: METHOD.POST, data }),
    ).to.be.true;
  });

  it('Method PUT', async () => {
    const data = { a: '1', b: '22' };

    await http.put('', { data });

    const expectedUrl = `${baseUrl.HOST}/test`;

    expect(
      requestStub.calledWithMatch(expectedUrl, { method: METHOD.PUT, data }),
    ).to.be.true;
  });

  it('Method DELETE', async () => {
    const data = { a: '1', b: '22' };

    await http.delete('', { data });

    const expectedUrl = `${baseUrl.HOST}/test`;

    expect(
      requestStub.calledWithMatch(expectedUrl, { method: METHOD.DELETE, data }),
    ).to.be.true;
  });
});
