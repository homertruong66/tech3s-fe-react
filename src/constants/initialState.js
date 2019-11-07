/**
 * Initial state for the redux store
 * @type {Object}
 */
export default {    
    loading: true,
    adminIds: [],
    admins: {},
    user: {
        authenticated: false,
        id: null,
        email: null,
        name: null,
        token: null
    },
    error: null
};
