import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Presentation Component
import HeaderComponent from '../layout/HeaderComponent';

// Action Creators
import * as ac from '../../actions/auth';

const actionCreators = { 
    logout : ac.logout
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
