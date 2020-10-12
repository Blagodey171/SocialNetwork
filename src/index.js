import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import './index.scss';
import App from './component/app/App.jsx';
import Store from './redux/redux-store';


ReactDOM.render(
    <BrowserRouter>
        {/* строгий режим протестировать с DidMount */}
        <React.StrictMode>
            <Provider store={Store} >
                <App />
            </Provider>
        </React.StrictMode>



    </BrowserRouter>,
    document.getElementById('root')
);


// dispatch={Store.dispatch.bind(Store)} dialogs={state.dialogsReducer.dialogsPage.dialogsBlock} link={state.sidebarReducer.sidebar.link} postTextareaValue={state.profileReducer.profilePage.postTextareaValue}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
