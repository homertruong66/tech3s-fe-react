import { combineReducers } from 'redux';

import { loading } from './loading';
import { error } from './error';
import { user } from './user';
import { admin } from './admin';
import { member } from './member';

const rootReducer = combineReducers({
   loading, error, user, admin, member
});

export default rootReducer;
