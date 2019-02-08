import { LOAD_POSTS, REMOVE_POST } from '../actionTypes';

export default function(state = [], action) {
   let newState;
   switch (action.type) {
      case LOAD_POSTS:
         newState = action.posts;
         break;
      case REMOVE_POST:
         newState = state.filter(p => p._id !== action.id)
         break;
      default: newState = state;
   };
   return newState;
};