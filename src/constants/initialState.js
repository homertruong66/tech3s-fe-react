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
        firstName: null,
        lastName: null,
        token: null
    },
    admin: {
        searchCriteria: {
            sort_name: 'createdAt',
            is_sort_asc: false,
            criteria: {},
            custom_criteria: {},
        },
        metaData: {},
        list: [
            '1', '2', '3'
        ],
        selectedAdmin: null,
    },
    member: {
        list: null
    }        
};
