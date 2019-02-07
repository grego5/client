import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_POSTs, REMOVE_POST, LOAD_POSTS } from '../actionTypes';

const loadPosts = posts => ({
   type: LOAD_POSTS,
   posts
});

export const getPosts = () => {
   return dispatch => {
      return apiCall('/posts')
      .then(res => dispatch(loadPosts(res)))
      .catch(err => dispatch(addError(err.message)));
   };
};