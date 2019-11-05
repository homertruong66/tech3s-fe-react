import React from 'react';

// Store
import configureStore from './store/configureStore';
import initialState from './constant/initialState';

// Action Creator
import { loading, loaded } from './action/loading';

// View
import HeaderComponent from './component/HeaderComponent';
import MenuComponent from './component/MenuComponent';
import MainComponent from './component/MainComponent';
import FooterComponent from './component/FooterComponent';
import './App.css';

// config store
const store = configureStore(initialState);

// test actions
console.log('========== Example store ===========');
store.dispatch(loading());
store.dispatch(loaded());

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
