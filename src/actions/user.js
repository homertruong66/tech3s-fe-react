import * as actionTypes from '../constants/actionTypes';

export function login(email, password, history) { 
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

export function logout(history) { 
    return (dispatch, getState) => {
        // TODO: log out with REST API
        // return API.logout(email)
        //     .then(response => response.json())
        //     .then(user => {
        //         dispatch({
        //             type: actionTypes.auth.LOGOUT_SUCCESS,
        //             data: user
        //         });
        //     })
        //     .catch(err => dispatch(createError(err)));
        
        dispatch({
            type: actionTypes.auth.LOGOUT_SUCCESS
        });
        
        history.push('/login');
    };
}

export function logoutSuccess(user) { 
    return {
        type: actionTypes.auth.LOGOUT_SUCCESS
    };
}