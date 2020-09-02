import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/App.js';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Store from './redux/redux-store';
import './index.scss';

let renderApp = (state) => {
    ReactDOM.render(
        <BrowserRouter>
          <React.StrictMode>
            <App  dispatch={Store.dispatch.bind(Store)} dialogs={state.dialogsReducer.dialogsPage.dialogsBlock} link={state.sidebarReducer.sidebar.link} posts={state.profileReducer.profilePage.posts} postTextareaValue={state.profileReducer.profilePage.postTextareaValue}  />
          </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
      );
}

renderApp(Store.getState());
Store.subscribe(() => {
  let state = Store.getState();
  renderApp(state);
});


    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
