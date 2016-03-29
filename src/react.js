import OriginalReact from 'react';
import ReactDOM from 'react-dom';
import Signal from './signal';

export default class {
  static event = new Signal();

  static createElement(type, props = {}, ...children) {
    if (type === 'button') {
      props.onClick = () => {
        this.event.put({action: 'click', target: props.id, value: true});
      };
    }
    return OriginalReact.createElement(type, props, ...children);
  }

  container = window.container;

  constructor(component) {
    this.component = component;
  }

  render(state) {
    ReactDOM.render(
      this.constructor.createElement(this.component, state),
      this.container
    );
  }

  async fold(state, accumulate) {
    this.render(state);
    this.fold(accumulate(state, await this.constructor.event.take()), accumulate);
  }
}
