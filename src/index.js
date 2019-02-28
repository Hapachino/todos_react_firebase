import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import { authChange } from './action';
import rootReducer from './reducers';
import think from './middleware/think';
import * as serviceWorker from './components/serviceWorker';

const store = createStore(rootReducer, applyMiddleware(think));

authChange(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
