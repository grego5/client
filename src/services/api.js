export function apiCall(path, options = {}) {
   const url = '/api' + path;

   if (localStorage.jwtToken) {
      const header = ['Authorization', `Bearer ${localStorage.jwtToken}`];
      if (!options.headers) {
         options = {
            ...options,
            headers: new Headers()
         }
      }
      options.headers.set(...header);
   };

   return new Promise((resolve, reject) => {
      fetch(url, options)
      .then(res => {
         if (res.ok) return res.json().then(data => resolve(data));
         if (res.status >= 400 && res.status < 500) {
            return res.json().then(data => reject(data.error));
         } else {
            return reject({message: 'Cannot reach the server. Try again later'});
         }
      })
      .catch(err => console.log(`caught: ${err.message}`));
   });
};

/* 
import axios from 'axios';
export function apiCall(method, path, data) {
   return new Promise((resolve, reject) => {
      return axios[method](path, data)
         .then(res => {
            return resolve(res.data);
         })
         .catch(err => {
            return reject(err.response.data.error);
      });
   });
};

*/