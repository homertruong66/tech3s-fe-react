import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import initialState from './constants/initialState';
import Homepage from './pages/Homepage';

// config store with Store shape defined in initial state
const store = configureStore(initialState);

// stateless React Element
function App() {
  return (
    <Provider store={store} >
      <div className="app"> 
        <Homepage />     
      </div>
    </Provider>
  );
}

export default App;
