import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';

// action creators
import { login, logout } from '../actions/user';

export const mapStateToProps = state => {    
    return {
        user: state.user
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ login, logout }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
