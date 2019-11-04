import React from 'react';
import './App.css';

import HeaderComponent from './component/HeaderComponent';
import MenuComponent from './component/MenuComponent';
import MainComponent from './component/MainComponent';
import FooterComponent from './component/FooterComponent';

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
