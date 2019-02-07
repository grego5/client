import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import { setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';

const store = configureStore();

if (localStorage.jwtToken) {
  try {
    const user = jwtDecode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(user))
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }

}
const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
