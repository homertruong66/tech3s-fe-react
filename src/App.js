import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import configureStore from './store/configureStore';
import initialState from './constants/initialState';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import HomepageContainer from "./components/containers/HomepageContainer";
import LoginPageContainer from "./components/containers/LoginPageContainer";
import NotFoundPage from "./components/page/NotFoundPage";
import LoadingPage from "./components/page/LoadingPage";

import './App.css';

// config store with Store shape defined in initial state
export const store = configureStore(initialState);
const persistor = persistStore(store);

// stateless React Element
function App() {
  return (
    <Provider store={store}>
        {/* the loading and persistor props are both required! */}
        <PersistGate loading={<LoadingPage />} persistor={persistor}>
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/app" render={checkAuthentication} />
                        <Route path="/login" component={LoginPageContainer} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        </PersistGate>
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
