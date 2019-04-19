import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import fetchData from './actions/actions';
import App from './components/App';

ReactDOM.render(
  // Fix: Add store to provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => fetchData()(store.dispatch)
);
