import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Presentation Component
import LoginPage from '../page/LoginPage';

// Action Creators
import * as ac from '../../actions/user';

const actionCreators = { 
  login : ac.login
};

export const mapStateToProps = state => {    
  return {
      user: state.user
  };
};

export const mapDispatchToProps = dispatch => {
  return {
      actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
