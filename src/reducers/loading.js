import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

// name of reducer must match with property of store which it will update
export function loading(state = initialState.loading, action) {     
    switch (action.type) {         
        case actionTypes.app.LOADING:                         
            return true; 

        case actionTypes.app.LOADED:                         
            return false; 

        default: 
            return state;
    }
}

