import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/App.js';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Store from './redux/store';
import './index.scss';

let renderApp = (state) => {
    ReactDOM.render(
        <BrowserRouter>
          <React.StrictMode>
            <App  dispatch={Store.dispatch.bind(Store)} dialogs={state.dialogsPage.dialogsBlock} link={state.sidebar.link} posts={state.profilePage.posts} textareaState={state.profilePage.textareaState} />
          </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
      );
}

renderApp(Store.getState());
Store.subscriber(renderApp);


    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
