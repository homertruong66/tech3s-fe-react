import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export function member(state = initialState.admin, action) {    
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case actionTypes.members.SEARCH: 
            nextState.list = action.list;
            return nextState;                                 

        default:
            return state;
    }
}