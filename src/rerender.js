import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './component/app/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './state/state'





export let rerender = function (state) {
    ReactDOM.render(
        <BrowserRouter>
          <React.StrictMode>
            <App  dialogs={state.dialogs} link={state.link} posts={state.posts} addPost={addPost} />
          </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
      );
}




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
