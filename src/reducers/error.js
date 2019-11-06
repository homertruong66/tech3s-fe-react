import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export function error(state = initialState.error, action) {    
    switch (action.type) {
        case actionTypes.app.ERROR: 
            return action.error;            

        default:
            return state;
    }
}