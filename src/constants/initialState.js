export default {    
    auth: {        
        id: null, email: null, first_name: null, last_name: null, token: null,
        error: {
            error_code: null,
            response: { code: null, message: null }
        }
    },
    admin: {
        searchCriteria: { sort_name: 'createdAt', is_sort_asc: false, criteria: {}, custom_criteria: {} },
        metaData: {},
        searchResult: {
            has_next_page: false, has_previous_page: false,
            list: [],
            num_of_pages: 0, page_index: 1, page_size: 10, total_rows: 0
        },
        selected: {
            id: null,
            email: '', confirmed_email: '', password: '', confirmed_password: '', first_name: '', last_name: ''
        },
        error: {
            error_code: null,
            response: { code: null, message: null }
        }
    },
    member: {
        list: null
    }        
};
