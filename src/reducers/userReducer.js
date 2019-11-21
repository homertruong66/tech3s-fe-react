import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export default (state = initialState.user, action) => {    
    switch (action.type) {
        case actionTypes.auth.LOGIN_SUCCESS: 
            return Object.assign({}, state, action.data);
            
        case actionTypes.auth.LOGOUT_SUCCESS: 
            return initialState.user;

        case actionTypes.auth.ERROR: 
            return { ...state, error: action.data };

        default:
            return state;
    }
}