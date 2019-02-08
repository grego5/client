import { apiCall } from '../../services/api';
import { addError } from './errors';
import { REMOVE_POST, LOAD_POSTS } from '../actionTypes';
import jwtDecode from 'jwt-decode';

const _getPosts = posts => ({
   type: LOAD_POSTS,
   posts
});

const _removePost = post => ({
   type: REMOVE_POST,
   post
});

export const getPosts = () => {
   return dispatch => {
      return apiCall('/posts')
      .then(res => dispatch(_getPosts(res)))
      .catch(err => dispatch(addError(err.message)));
   };
};

export const removePosts = post => {
   const { username } = jwtDecode(localStorage.jwtToken);
   return dispatch => {
      return apiCall(`/user/${username}/post/${post}/delete`)
      .then(res => dispatch(_removePost(res)))
      .catch(err => dispatch(addError(err.message)));
   };
};