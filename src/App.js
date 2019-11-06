import React from 'react';

// Store
import configureStore from './store/configureStore';
import initialState from './constants/initialState';

// Action Creator
import { loading, loaded } from './actions/loading';
import { login } from './actions/user';
import { createError } from './actions/error';

// View
import HeaderComponent from './components/HeaderComponent';
import MenuComponent from './components/MenuComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';

// config store
const store = configureStore(initialState);

// test actions
console.log('========== Testing actions ===========');
store.dispatch(loading());
store.dispatch(loaded());
store.dispatch(login("homertruong66@gmail.com"));
store.dispatch(createError("error bla bla", "info"));

function App() {
  return (
    <div className="App"> 
      <HeaderComponent />
      <MenuComponent />
      <MainComponent />
      <FooterComponent />      
    </div>
  );
}

export default App;
