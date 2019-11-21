import { combineReducers } from 'redux';

// all keys of reducers must match all store's keys (loading, error, user, admin, member)
import loading from './loadingReducer';
import user from './userReducer';
import admin from './adminReducer';
import member from './memberReducer';

const rootReducer = combineReducers({
   loading, user, admin, member
});

export default rootReducer;
