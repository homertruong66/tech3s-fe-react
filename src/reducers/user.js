import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export function user(state = initialState.user, action) {    
    switch (action.type) {
        case actionTypes.auth.LOGIN_SUCCESS: 
            return { ...state, user: action.data }
            
        case actionTypes.auth.LOGOUT_SUCCESS: 
            return { ...state, user: action.data }

        default:
            return state;
    }
}