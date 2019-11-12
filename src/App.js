import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';

import configureStore from './store/configureStore';
import initialState from './constants/initialState';

import HomepageContainer from "./containers/HomepageContainer";
import LoginPageContainer from "./containers/LoginPageContainer";
import NotFoundPage from "./components/page/NotFoundPage";

import './App.css';

// config store with Store shape defined in initial state
const store = configureStore(initialState);

// stateless React Element
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div className="App">
                <Switch>
                    <Route path="/app" component={HomepageContainer} />
                    <Route path="/login" component={LoginPageContainer} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
