import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import configureStore from './store/configureStore';
import initialState from './constants/initialState';

import Homepage from "./components/page/Homepage";
import LoginPage from "./components/page/LoginPage";
import NotFoundPage from "./components/page/NotFoundPage";

import './App.css';

// config store with Store shape defined in initial state
const store = configureStore(initialState);

// stateless React Element
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/app" component={Homepage} />
                    <Route path="/login" component={LoginPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
