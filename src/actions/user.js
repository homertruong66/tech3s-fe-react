import * as actionTypes from '../constants/actionTypes';
import { createError } from './error';
import SecurityAPI from '../api/SecurityAPI';

export const login = (email, password, history) => { 
    return (dispatch, getState) => {
        return SecurityAPI.login({username: email, password})                          
                          .then(userProfile => {
                            dispatch(loginSuccess(userProfile));
                            history.push('/app');
                          })
                          .catch(err => { 
                              dispatch(createError(err));
                          });
    };
}

export const loginSuccess= (userProfile) => { 
    return {
        type: actionTypes.auth.LOGIN_SUCCESS,
        data: userProfile
    };
}

export const logout = (history) => { 
    return (dispatch, getState) => {
        return SecurityAPI.logout()
                          .then(() => {
                            dispatch(logoutSuccess());
                            history.push('/login');
                          })
                          .catch(err => { 
                              dispatch(createError(err));
                          });
    };
}

export const logoutSuccess = () => { 
    return {
        type: actionTypes.auth.LOGOUT_SUCCESS
    };
}