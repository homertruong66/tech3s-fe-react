/**
 * Initial state for the redux store
 * @type {Object}
 */
export default {    
    loading: false,
    adminIds: [],
    admins: {},
    user: {
        authenticated: false,
        id: null,
        email: null,
        token: null
    },
    error: null
};
