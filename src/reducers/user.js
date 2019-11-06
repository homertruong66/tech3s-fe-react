import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export function user(state = initialState.user, action) {    
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case actionTypes.auth.LOGIN_SUCCESS: 
            nextState.authenticated = true;
            nextState.email = action.email;
            return nextState;            

        default:
            return state;
    }
}