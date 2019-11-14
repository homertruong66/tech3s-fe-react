import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export default (state = initialState.user, action) => {    
    switch (action.type) {
        case actionTypes.auth.LOGIN_SUCCESS: 
            return Object.assign({}, state, action.data);
            
        case actionTypes.auth.LOGOUT_SUCCESS: 
            return initialState.user;

        default:
            return state;
    }
}