import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Presentation Component
import HeaderComponent from '../layout/HeaderComponent';

// Action Creators
import * as ac from '../../actions/user';

const actionCreators = { 
    logout : ac.logout
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
