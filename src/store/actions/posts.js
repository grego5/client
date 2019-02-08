import { apiCall } from '../../services/api';
import { addError } from './errors';
import { DELETE_POST, LOAD_POSTS } from '../actionTypes';

const _getPosts = posts => ({
   type: LOAD_POSTS,
   posts
});

const _deletePost = post => ({
   type: DELETE_POST,
   post
});

export function getPosts() {
   return function(dispatch) {
      return apiCall('/posts')
      .then(res => dispatch(_getPosts(res)))
      .catch(err => dispatch(addError(err.message)));
   };
};

export function deletePost(post) {
   return function(dispatch, getState) {
      return new Promise((resolve, reject) => {
         const {currentUser} = getState();
         const id = currentUser.user.id;
         return apiCall(`/user/${id}/post/${post}`, {method: 'delete'})
         .then(res => {
            dispatch(_deletePost(res._id));
            resolve();
         })
         .catch(err => {
            dispatch(addError(err.message));
            reject();
         });
      });
   };
};

export function createPost(text) {
   return function(dispatch, getState) {
      return new Promise((resolve, reject) => {
         const {currentUser} = getState();
         const id = currentUser.user.id;
         const options = {
            method: 'post',
            headers: new Headers({
               'Content-Type': 'application/json'
            }),
            body: JSON.stringify(text)
            };
         return apiCall(`/user/${id}/post`, options)
            .then(res => resolve())
            .catch(err => {
               dispatch(addError(err.message));
               reject();
            });
      });
   };
};