/**
 * Initial state for the redux store
 * @type {Object}
 */
export default {
    error: null,
    loading: false,
    adminIds: [],
    admins: {},
    user: {
        authenticated: false,
        profilePicture: null,
        id: null,
        name: null,
        token: null
    }
};
