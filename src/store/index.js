import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export default function configureStore() {
   const store = createStore(rootReducer,
      compose(applyMiddleware(thunk))
   );
   return store;
};