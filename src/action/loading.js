import * as actionType from '../constant/actionType';

export function loading() {
    return {
        type: actionType.app.LOADING 
    }
} 

export function loaded() { 
    return {
        type: actionType.app.LOADED
    }
}
