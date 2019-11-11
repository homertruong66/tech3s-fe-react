import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Homepage from '../components/page/Homepage';

// action creators
import { loaded } from '../actions/loading';

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
