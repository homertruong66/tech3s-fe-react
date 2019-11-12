import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderComponent from '../components/layout/HeaderComponent';

// action creators
import { logout } from '../actions/user';

export const mapStateToProps = state => {    
    return {
        user: state.user
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ logout }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
