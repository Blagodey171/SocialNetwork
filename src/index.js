import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './component/app/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './state/state'

import State from './state/state';


// addPost('hihi')


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App  dialogs={State.dialogs} link={State.link} posts={State.posts} addPost={addPost} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
