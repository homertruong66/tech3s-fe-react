export default {    
    auth: {        
        id: null, email: null, firstName: null, lastName: null, token: null,
        error: {
            errorCode: null,
            response: { code: null, message: null }
        }
    },
    admin: {                
        searchResult: {
            hasNextPage: false, hasPreviousPage: false,
            list: [],
            numOfPages: 0, pageIndex: 1, pageSize: 10, totalRows: 0
        },
        selected: {
            id: null,
            email: '', confirmedEmail: '', password: '', confirmedPassword: '', 
            firstName: '', lastName: '', phone: ''
        },
        error: {
            errorCode: null,
            response: { code: null, message: null }
        }
    }      
};
