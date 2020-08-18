import React from 'react';
import ReactDOM from 'react-dom';
// import App from './Components/App';
import * as serviceWorker from './serviceWorker';

import SignUp from './Components/SignUp';
import { Provider } from 'react-redux';
import { store } from './ReduxStore/store'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SignUp />
    </Provider>
  </React.StrictMode>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
