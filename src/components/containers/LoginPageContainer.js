import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Presentation Component
import LoginPage from '../page/LoginPage';

// Action Creators
import * as ac from '../../actions/auth';

const actionCreators = { 
  login : ac.login
};

export const mapStateToProps = state => {    
  return {
      auth: state.auth
  };
};

export const mapDispatchToProps = dispatch => {
  return {
      actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
