import * as actionTypes from '../constants/actionTypes';
import { createError } from './error';
import AdminAPI from '../api/AdminAPI';

export const search = (data) => { 
    return (dispatch, getState) => {
        return AdminAPI.search(data)                          
                        .then(searchResult => {
                            dispatch(searchSuccess(searchResult));
                        })
                        .catch(err => { 
                            dispatch(createError(err));
                        });
    };
}

export const searchSuccess = (searchResult) => { 
    return {
        type: actionTypes.admins.SEARCH_SUCCESS,
        data: searchResult
    };
}
