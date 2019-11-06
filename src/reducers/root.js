import { loading } from './loading';
import { user } from './user';
import { error } from './error';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   loading, user, error 
});

export default rootReducer;
