import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
// const userList = manageUsers(
//   manageUsers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
  // add imports and code
  <Provider>
    <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
