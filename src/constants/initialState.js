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
        searchResult: {
            has_next_page: false,
            has_previous_page: false,
            list: [],
            num_of_pages: 0,
            page_index: 1,
            page_size: 10,
            total_rows: 0
        },
        selected: {
            id: null,
            email: '',
            confirmedEmail: '',
            password: '',
            confirmedPassword: '',
            firstName: '',
            lastName: ''
        },
    },
    member: {
        list: null
    }        
};
