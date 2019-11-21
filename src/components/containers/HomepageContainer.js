import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Presentation Component
import Homepage from '../page/Homepage';

// Action Creators
// import * as ac from '../../actions';

const actionCreators = { 
};

export const mapStateToProps = state => {    
  return {
  };
};

export const mapDispatchToProps = dispatch => {
  return {
      actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
