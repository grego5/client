import { apiCall } from '../../services/api'
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';
import jwtDecode from 'jwt-decode';

export function setCurrentUser(user) {
   return {
      type: SET_CURRENT_USER,
      user
   };
};

export function logout(){
   return function(dispatch) {
      localStorage.clear();
      dispatch(setCurrentUser({}));
   };
};

export function authUser(type, userData) {
   return function(dispatch) {
      return new Promise((resolve, reject) => {
         const options = {
            method: 'post',
            headers: new Headers({
               'Content-Type': 'application/json'
            }),
            body: JSON.stringify(userData)
            };
         apiCall(`/auth/${type}`, options)
            .then(data => {
               localStorage.setItem('jwtToken', data.token);
               const user = jwtDecode(data.token);
               dispatch(setCurrentUser(user));
               dispatch(removeError());
               resolve();
            })
            .catch(err=>{
            dispatch(addError(err.message));
            console.log(err.message);
            reject();
         });
      });
   };
};