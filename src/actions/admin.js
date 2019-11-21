import * as actionTypes from '../constants/actionTypes';
import AdminAPI from '../api/AdminAPI';

export const createError = (err) => { 
    return {
        type: actionTypes.admins.ERROR,
        data: err
    };
}

export const searchRequest = (data) => { 
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

export const create = () => { 
    return {
        type: actionTypes.admins.CREATE
    };
}

export const createRequest = (data) => { 
    return (dispatch, getState) => {
        return AdminAPI.create(data)                          
                        .then(dto => {
                            dispatch(searchRequest({}));
                            dispatch(create());
                        })
                        .catch(err => { 
                            dispatch(createError(err));
                        });
    };
}

export const getRequest = (id) => { 
    return (dispatch, getState) => {
        return AdminAPI.get(id)                          
                        .then(dto => {
                            dispatch(getSuccess(dto));
                        })
                        .catch(err => { 
                            dispatch(createError(err));
                        });
    };
}

export const getSuccess = (dto) => { 
    return {
        type: actionTypes.admins.GET_SUCCESS,
        data: dto
    };
}

export const updateRequest = (id, data) => { 
    return (dispatch, getState) => {
        return AdminAPI.update(id, data)                          
                        .then(dto => {
                            dispatch(searchRequest({}));
                            dispatch(create());
                        })
                        .catch(err => { 
                            dispatch(createError(err));
                        });
    };
}

export const deleteRequest = (id) => { 
    return (dispatch, getState) => {
        return AdminAPI.del(id)                          
                        .then(() => {
                            dispatch(searchRequest({}));
                            dispatch(create());
                        })
                        .catch(err => { 
                            dispatch(createError(err));
                        });
    };
}
