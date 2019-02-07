import { LOAD_POSTS, REMOVE_POST } from '../actionTypes';

export default function(state = [], action) {
   switch (action.type) {
      case LOAD_POSTS:
      case REMOVE_POST:
      default: return state;
   };
};