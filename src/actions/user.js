import * as actionTypes from '../constants/actionTypes';

export function login(email) { 
    return {
        type: actionTypes.auth.LOGIN_SUCCESS,
        email: email
    };
}