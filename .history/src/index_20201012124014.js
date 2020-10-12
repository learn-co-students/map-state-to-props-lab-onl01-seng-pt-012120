import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
const userList = manageUsers(
  
)

ReactDOM.render(
  // add imports and code
  <Provider>
    <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
