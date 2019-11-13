/**
 * Initial state for the redux store
 * @type {Object}
 */
export default {    
    loading: true,    
    error: null,
    user: {        
        id: null,
        email: null,
        name: null,
        token: null
    },
    admin: {
        list: null
    },
    member: {
        list: null
    }        
};
