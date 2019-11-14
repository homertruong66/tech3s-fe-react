import * as actionTypes from '../constants/actionTypes';

export const createError = (error, info) => { 
    return {
        type: actionTypes.app.ERROR, 
        error, 
        info 
    };
}