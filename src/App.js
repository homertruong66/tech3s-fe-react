import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import configureStore from './store/configureStore';
import initialState from './constants/initialState';

import HomepageContainer from "./containers/HomepageContainer";
import LoginPageContainer from "./containers/LoginPageContainer";
import NotFoundPage from "./components/page/NotFoundPage";

import './App.css';

// config store with Store shape defined in initial state
export const store = configureStore(initialState);

// stateless React Element
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/app" render={checkAuthentication} />
                    <Route path="/login" component={LoginPageContainer} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
  );
}

function checkAuthentication() {
    const { user: { token } } = store.getState();        
    return (
        token != null ? (
            <HomepageContainer />
        ) : (
            <Redirect to="/login" />
        )
    );
}

export default App;
