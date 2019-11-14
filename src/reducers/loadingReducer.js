import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export default (state = initialState.loading, action) => {     
    switch (action.type) {         
        case actionTypes.app.LOADING:                         
            return true; 

        case actionTypes.app.LOADED:                         
            return false; 

        default: 
            return state;
    }
}

