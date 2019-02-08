import { LOAD_POSTS, DELETE_POST } from '../actionTypes';

export default function(state = [], action) {
   let newState;
   switch (action.type) {
      case LOAD_POSTS:
         newState = action.posts;
         break;
      case DELETE_POST:
         debugger;
         newState = state.filter(p => p._id !== action.post)
         break;
      default: newState = state;
   };
   return newState;
};