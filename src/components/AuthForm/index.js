import React, { Component } from 'react';

class AuthForm extends Component {
   constructor(props){
      super(props);
      this.state = {
         username: '',
         email: '',
         password: '',
         image: ''
      };
   };

   handleChange = e => this.setState({ [e.target.name]: e.target.value });

   handleSubmit = e => {
      e.preventDefault();
      const authType = this.props.register ? 'signup' : 'signin';
      this.props.onAuth(authType, this.state)
         .then(() => this.props.history.push('/'))
         .catch(err => console.log(err));
   };

   render(){
      const { username, email, password, image} = this.state;
      const { heading, buttonText, register, errors, history, removeError } = this.props;
      const labelClass = "col-md-2 col-form-label";
      const textBoxClass = "col-md-4";
      const formGroupClass = "form-group row justify-content-md-center";

      history.listen(() => {
         removeError();
      });

      return (
         <div>
            <div className="justify-content-md-center text-center container">

               <h2>{heading}</h2>
               {errors.message && (<div className="alert alert-danger">{errors.message}</div>)}
               <form className="form" onSubmit={this.handleSubmit}>
                  <div className={formGroupClass}>
                     <label className={labelClass} htmlFor="email">Email:</label>
                     <div className={textBoxClass}>
                        <input 
                           type="text"
                           name="email"
                           className="form-control ml-2" 
                           id="email" 
                           onChange={this.handleChange}
                           value={email}
                           autoComplete="false"
                        />
                     </div>
                  </div>
                  <div className={formGroupClass}>
                     <label className={labelClass} htmlFor="password">Password:</label>
                     <div className={textBoxClass}>
                        <input 
                           type="password"
                           name="password"
                           className="form-control ml-2" 
                           id="password" 
                           onChange={this.handleChange}
                           value={password}
                           autoComplete="false"
                        />
                     </div>
                  </div>
               {register && (
                  <div>
                     <div className={formGroupClass}>
                        <label className={labelClass} htmlFor="username">Username:</label>
                        <div className={textBoxClass}>
                           <input 
                              type="text"
                              name="username"
                              className="form-control ml-2" 
                              id="username" 
                              onChange={this.handleChange}
                              value={username}
                              autoComplete="false"
                           />
                        </div>
                     </div>
                     <div className={formGroupClass}>
                        <label className={labelClass} htmlFor="image">Image URL:</label>
                        <div className={textBoxClass}>
                           <input 
                              type="text"
                              name="image"
                              className="form-control ml-2" 
                              id="image" 
                              onChange={this.handleChange}
                              value={image}
                              autoComplete="false"
                           />
                        </div>
                     </div>
                  </div>
               )}
               <button type="submit" className="btn btn-primary" >{buttonText}</button>
               </form>
            </div>
         </div>
      );
   };
};

export default AuthForm;