import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/App';
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





