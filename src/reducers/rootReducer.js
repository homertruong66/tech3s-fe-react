import { combineReducers } from 'redux';

// all keys of reducers must match all store's keys (auth, admin)
import auth from './authReducer';
import admin from './adminReducer';

const rootReducer = combineReducers({
   auth, admin
});

export default rootReducer;
