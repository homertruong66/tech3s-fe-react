import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loaded } from '../actions/loading';
import HeaderComponent from '../components/HeaderComponent';
import MenuComponent from '../components/MenuComponent';
import MainComponent from '../components/MainComponent';
import FooterComponent from '../components/FooterComponent';

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
          <MainComponent />
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
