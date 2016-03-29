import Application from './application';
import {renderReactComponent} from './render';

async function render(view, state, update) {
  render(view, update(state, await renderReactComponent(view, state)), update);
}

render(Application, {count: 0}, (state, {action, id}) => ({
  count:
    id === 'increment' ? state.count + 1 :
    id === 'decrement' ? state.count - 1 :
    state.count
}));
