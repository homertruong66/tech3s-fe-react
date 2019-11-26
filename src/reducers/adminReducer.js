import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export default (state = initialState.admin, action) => {    
    switch (action.type) {
        case actionTypes.admins.SEARCH_SUCCESS: 
            return { ...state, searchResult: action.data, error: initialState.admin.error  } 
            
        case actionTypes.admins.CREATE: 
            return { ...state, selected: initialState.admin.selected, error: initialState.admin.error } 

        case actionTypes.admins.GET_SUCCESS: 
            return { ...state, selected: action.data } 

        case actionTypes.admins.ERROR: 
            return { ...state, error: action.data } 

        default:
            return state;
    }
}