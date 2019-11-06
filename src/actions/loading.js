import * as actionTypes from '../constants/actionTypes';

export function loading() {
    return {
        type: actionTypes.app.LOADING 
    }
} 

export function loaded() { 
    return {
        type: actionTypes.app.LOADED
    }
}
