import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export function admin(state = initialState.admin, action) {    
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case actionTypes.admins.SEARCH: 
            nextState.list = action.list;
            return nextState;                   

        default:
            return state;
    }
}