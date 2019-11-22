export default {    
    auth: {        
        id: null, email: null, first_name: null, last_name: null, token: null,
        error: {
            error_code: null,
            response: { code: null, message: null }
        }
    },
    admin: {                
        searchResult: {
            has_next_page: false, has_previous_page: false,
            list: [],
            num_of_pages: 0, page_index: 1, page_size: 10, total_rows: 0
        },
        selected: {
            id: null,
            email: '', confirmed_email: '', password: '', confirmed_password: '', 
            first_name: '', last_name: '', phone: ''
        },
        error: {
            error_code: null,
            response: { code: null, message: null }
        }
    }      
};
