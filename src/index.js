import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './constants/initialState';

import App from './App';
import LoginPage from "./components/LoginPage";
import NotFoundPage from "./components/NotFoundPage";

import * as serviceWorker from './serviceWorker';

import './App.css';

// config store with Store shape defined in initial state
const store = configureStore(initialState);

const routing = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    routing, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
