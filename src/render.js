import OriginalReact from 'react';
import ReactDOM from 'react-dom';
import Signal from './signal';

const event = new Signal();

export const React = {
  createElement(type, props = {}, ...children) {
    if (type === 'button') {
      props.onClick = () => {
        event.put({action: 'click', id: props.id});
      };
    }
    return OriginalReact.createElement(type, props, ...children);
  }
}

export async function renderReactComponent(component, state) {
  ReactDOM.render(
    React.createElement(component, state),
    window.container
  );
  return await event.take();
};
