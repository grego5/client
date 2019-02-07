import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export default function(state = {message: null}, action) {
   switch (action.type) {
      case ADD_ERROR:
         return { message: action.error };
      case REMOVE_ERROR:
         return { message: null };
      default:
         return state;
   }
};