import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AdminComponent from '../components/admin/AdminComponent';

// action creators
import { search } from '../actions/admin';

export const mapStateToProps = state => {    
    return {
        admin: state.admin
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ search }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent);
