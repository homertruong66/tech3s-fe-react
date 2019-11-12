import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginPage from '../components/page/LoginPage';

// action creators
import { login } from '../actions/user';

export const mapStateToProps = state => {    
  return {
      user: state.user
  };
};

export const mapDispatchToProps = dispatch => {
  return {
      actions: bindActionCreators({ login }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
