import * as actionTypes from '../constants/actionTypes';
import history from '../history';

export function login(email, password) { 

    return (dispatch, getState) => {
        // TODO: login with REST API
        // return API.login(email, password)
        //     .then(response => response.json())
        //     .then(user => {
        //         dispatch({
        //             type: actionTypes.auth.LOGIN_SUCCESS,
        //             data: user
        //         });
        //     })
        //     .catch(err => dispatch(createError(err)));
        
        dispatch({
            type: actionTypes.auth.LOGIN_SUCCESS,
            data: {
                email,
                isAuthenticated: true
            }
        });
        
        history.push('/app');
    };
}

export function loginSuccess(user) { 
    return {
        type: actionTypes.auth.LOGIN_SUCCESS,
        data: user
    };
}

export function logout() { 
    return {
        type: actionTypes.auth.LOGOUT_REQUEST
    };
}

export function logoutSuccess(user) { 
    return {
        type: actionTypes.auth.LOGOUT_SUCCESS,
        data: user
    };
}