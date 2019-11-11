import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Homepage
import HeaderContainer from '../../containers/HeaderContainer';
import MenuComponent from '../MenuComponent';
import MainComponent from '../MainComponent';
import FooterComponent from '../FooterComponent';

// Admin Management
import AdminComponent from '../admin/AdminComponent';

// Member Management
import MemberComponent from '../member/MemberComponent';

// stateful PC to use life cycle methods
export default class Homepage extends React.Component {
  
  componentDidMount() { 
    this.props.actions.loaded();
  }

  render() {    
    return (
      this.props.loading ? (
        <div>Loading...</div>
      ) : (
        <div className="homepage"> 
          <HeaderContainer />
          <MenuComponent />
          <Switch>
              <Route exact path="/app" component={MainComponent} />
              <Route path="/app/admins" component={AdminComponent} />
              <Route path="/app/members" component={MemberComponent} />
          </Switch>          
          <FooterComponent />      
        </div>    
      )
    )
  }
}

