import * as actionTypes from '../constants/actionTypes';

export const loading = () => {
    return {
        type: actionTypes.app.LOADING 
    }
} 

export const loaded = () => { 
    return {
        type: actionTypes.app.LOADED
    }
}
