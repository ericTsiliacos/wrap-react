import Application from './application';
import React from './react';

new React(Application).fold({count: 0}, (state, {action, target, value}) => ({
  count:
    id === 'increment' ? state.count + 1 :
    id === 'decrement' ? state.count - 1 :
    state.count
}));
