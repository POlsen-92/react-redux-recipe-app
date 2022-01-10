import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './app/App.js';
// Import 'store' here.
import { store } from './app/store.js';


const render = () => {
  // Pass `state` and `dispatch` props to <App />
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
  )
}
render();
// Subscribe render to changes to the `store`
store.subscribe(render)
