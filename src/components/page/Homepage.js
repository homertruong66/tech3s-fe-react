import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loaded } from '../../actions/loading';
import HeaderComponent from '../HeaderComponent';
import MenuComponent from '../MenuComponent';
import MainComponent from '../MainComponent';
import FooterComponent from '../FooterComponent';

// Admin Management
import AdminComponent from '../admin/AdminComponent';

// Member Management
import MemberComponent from '../member/MemberComponent';

// stateful PC to use life cycle methods
class Homepage extends React.Component {
  
  componentDidMount() { 
    this.props.actions.loaded();
  }

  render() {    
    return (
      this.props.loading ? (
        <div>Loading...</div>
      ) : (
        <div className="homepage"> 
          <HeaderComponent />
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

// generate a container that wraps this PC
export const mapStateToProps = state => {    
  return {
      loading: state.loading
  };
};

export const mapDispatchToProps = dispatch => {
  return {
      actions: bindActionCreators({ loaded }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
