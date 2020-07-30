import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/App.js';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import store from './state/state';
import './index.scss';

function renderApp (store) {
    
    ReactDOM.render(
        
        <BrowserRouter>
          <React.StrictMode>
            <App  dialogs={store.dialogs} link={store.link} posts={store.posts} addPost={store.addPost} textareaState={store.textareaState} changeTextareaValue={store.changeTextareaValue} />
          </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
      );
}

store.subscriber(renderApp);
renderApp(store);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
