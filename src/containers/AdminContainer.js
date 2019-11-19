import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AdminComponent from '../components/admin/AdminComponent';
import * as adminActionCreators from '../actions/admin';

const actionCreators = { 
    searchRequest   : adminActionCreators.searchRequest, 
    create          : adminActionCreators.create, 
    createRequest   : adminActionCreators.createRequest, 
    getRequest      : adminActionCreators.getRequest, 
    updateRequest   : adminActionCreators.updateRequest, 
    deleteRequest   : adminActionCreators.deleteRequest 
}; 

export const mapStateToProps = state => {    
    return {
        admin: state.admin
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent);
