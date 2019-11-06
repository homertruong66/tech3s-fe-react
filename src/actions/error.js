import * as actionTypes from '../constants/actionTypes';

export function createError(error, info) { 
    return {
        type: actionTypes.app.ERROR, 
        error, 
        info 
    };
}