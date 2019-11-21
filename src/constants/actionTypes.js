export const app = {    
    LOADED  : 'app/loaded',
    LOADING : 'app/loading'
}

export const auth = {
    LOGIN_REQUEST   : 'auth/login/request',
    LOGIN_SUCCESS   : 'auth/login/success',

    LOGOUT_REQUEST  : 'auth/logout/request',
    LOGOUT_SUCCESS  : 'auth/logout/success',

    ERROR : 'auth/error',
}

export const admins = {
    SEARCH_REQUEST : 'admin/search/request',    
    SEARCH_SUCCESS : 'admin/search/success',
    
    CREATE         : 'admin/create',
    CREATE_REQUEST : 'admin/create/request',
    
    GET_REQUEST    : 'admin/get/request',
    GET_SUCCESS    : 'admin/get/success',    
    UPDATE_REQUEST : 'admin/update/request',

    DELETE_REQUEST : 'admin/delete/request',

    ERROR : 'admin/error',
}

export const members = {
    SEARCH  : 'member/search',    
    CREATE  : 'member/create',
    GET     : 'member/get',
    UPDATE  : 'member/update'    
}