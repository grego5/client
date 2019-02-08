import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';

class Navbar extends Component {
   render(){
      const { currentUser, logout } = this.props;

      return(
         <nav className="navbar navbar-expand navbar-light">
            <div className="container">
               <Link to="/" className="navbar-brand">
                  <i id="logo" className="fas fa-comments"></i>
               </Link>
                  {currentUser.isAuthenticated ? (
                     <ul className="nav navbar-nav navbar-right flex-row">
                        <li className="nav-item">
                           <Link className="nav-link" 
                              to={`/users/${currentUser.user.id}/messages/new`}>New Message
                           </Link>
                        </li>
                        <li className="nav-item">
                           <button className="btn btn-link nav-link" onClick={logout}>Logout</button>
                        </li>
                     </ul>
                  ) : (
                     <ul className="nav navbar-nav navbar-right flex-row">
                        <li className="nav-item">
                           <Link className="nav-link" to='/login'>Login</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to='/register'>Register</Link>
                        </li>
                     </ul>
                  )}
            </div>
         </nav>
      )
   }
}

function mapStateToProps(state){
   return {
      currentUser: state.currentUser
   };
}

const redux = connect(mapStateToProps, { logout });
export default redux(Navbar);