import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export function admin(state = initialState.admin, action) {    
    switch (action.type) {
        case actionTypes.admins.SEARCH: 
            return { ...state, list: action.data }            

        default:
            return state;
    }
}