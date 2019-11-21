import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Presentation Component
import AdminComponent from '../person/AdminComponent';

// Action Creators
import * as ac from '../../actions/admin';

const actionCreators = { 
    searchRequest   : ac.searchRequest, 
    create          : ac.create, 
    createRequest   : ac.createRequest, 
    getRequest      : ac.getRequest, 
    updateRequest   : ac.updateRequest, 
    deleteRequest   : ac.deleteRequest 
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
