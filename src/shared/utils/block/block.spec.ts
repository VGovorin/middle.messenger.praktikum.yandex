/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import { Block } from './block.ts';

interface Props {
  text?: string;
  events?: Record<string, () => void>;
}

type Refs = {};

describe('Block', () => {
  let PageClass: typeof Block<Props, Refs>;

  before(() => {
    class Page extends Block<Props, Refs> {
      constructor(props: Props) {
        super({
          ...props,
        });
      }

      protected render(): string {
        return `<div>
                    <span id="test-text">{{text}}</span>
                    <button>{{text-button}}</button>
                </div>`;
      }
    }

    PageClass = Page;
  });

  it('Must create a component with a state from the constructor', () => {
    const text = 'Hello';
    const pageComponent = new PageClass({ text });

    const spanText =
      pageComponent.element?.querySelector('#test-text')?.innerHTML;

    expect(spanText).to.be.eq(text);
  });

  it('The component must have a reactive behaviour', () => {
    const text = 'new value';
    const pageComponent = new PageClass({ text: 'Hello' });

    pageComponent.setProps({ text });
    const spanText =
      pageComponent.element?.querySelector('#test-text')?.innerHTML;

    expect(spanText).to.be.eq(text);
  });

  it('The component must set events on the element', () => {
    const handlerStub = sinon.stub();
    const pageComponent = new PageClass({
      events: {
        click: handlerStub,
      },
    });

    const event = new MouseEvent('click');
    pageComponent.element?.dispatchEvent(event);

    expect(handlerStub.calledOnce).to.be.true;
  });

  it('The component must call the dispatchComponentDidMount method', () => {
    const clock = sinon.useFakeTimers();
    const pageComponent = new PageClass();

    const spyCDM = sinon.spy(pageComponent, 'componentDidMount');

    const element = pageComponent.getContent();
    document.body.append(element!);
    clock.next();

    expect(spyCDM.calledOnce).to.be.true;
  });
});
