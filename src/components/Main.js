import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './Homepage';
import AuthForm from './AuthForm';
import PostForm from './PostForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth';

const Main = ({ authUser, errors, removeError, currentUser }) => {
   return (
      <Switch>
         <Route exact path="/" 
            render={props => <Homepage
               currentUser={currentUser}
               errors={errors}
               {...props}
            />}
         />
         <Route exact path="/login" render={props=> {
            return (
               <AuthForm
                  removeError={removeError}
                  errors={errors}
                  buttonText="Log in" 
                  heading="Login" 
                  {...props} 
                  onAuth={authUser}
               />
            )
         }} />
         <Route exact path="/register" render={props=> {
            return (
               <AuthForm
                  removeError={removeError}
                  errors={errors}
                  register buttonText="Sign up" 
                  heading="Register" 
                  {...props} 
                  onAuth={authUser}
               />
            )
         }} />
         <Route path="/users/:id/messages/new" component={withAuth(PostForm)} />
      </Switch>
   )
}

function mapStateToProps(state){
   return {
      currentUser: state.currentUser,
      errors: state.errors
   };
}

const redux = connect(mapStateToProps, { authUser, removeError });
export default withRouter(redux(Main));