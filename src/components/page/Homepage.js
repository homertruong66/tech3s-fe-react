import React from 'react';
import { Switch, Route } from 'react-router-dom';

// wrapped by HomepageContainer;

// children
  // Homepage layout
import HeaderContainer from '../containers/HeaderContainer';
import MenuComponent from '../layout/MenuComponent';
import MainComponent from '../layout/MainComponent';
import FooterComponent from '../layout/FooterComponent';

  // Main Component's children
import AdminContainer from '../containers/AdminContainer';
import MemberComponent from '../person/MemberComponent';

// stateful Presentation Component to use life cycle methods
export default class Homepage extends React.Component {
  
  render() {    
    return (
      <div className="homepage"> 
        <HeaderContainer />
        <MenuComponent />
        <Switch>
            <Route exact path="/app" component={MainComponent} />
            <Route path="/app/admins" component={AdminContainer} />
            <Route path="/app/members" component={MemberComponent} />
        </Switch>          
        <FooterComponent />      
      </div>  
    )
  }
}

