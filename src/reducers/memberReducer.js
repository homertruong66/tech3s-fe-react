import initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export default (state = initialState.admin, action) => {    
    switch (action.type) {
        case actionTypes.members.SEARCH: 
            return { ...state, list: action.data }

        default:
            return state;
    }
}