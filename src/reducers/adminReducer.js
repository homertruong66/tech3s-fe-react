import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export default (state = initialState.admin, action) => {    
    switch (action.type) {
        case actionTypes.admins.SEARCH_SUCCESS: 
            return { ...state, searchResult: action.data } 
            
        case actionTypes.admins.CREATE: 
            return { ...state, selected: initialState.admin.selected } 

        case actionTypes.admins.GET_REQUEST: 
            return { ...state, selected: action.data } 

        default:
            return state;
    }
}