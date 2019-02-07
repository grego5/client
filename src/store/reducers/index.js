import { combineReducers } from 'redux';
import errors from './errors';
import currentUser from './currentUser';
import posts from './posts';

const rootReducer = combineReducers({
   currentUser,
   errors,
   posts
})

export default rootReducer;