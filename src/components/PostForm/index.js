import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/posts';
import { removeError } from '../../store/actions/errors';

class PostForm extends Component {
   constructor(props){
      super(props);
      this.state = {
         text: '',
      };
   };

   handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
      this.props.removeError();
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.createPost(this.state)
         .then(() => this.props.history.push('/'))
         .catch(err=> console.log(err));
   };

   render(){
      const { text } = this.state;
      const { errors, history, removeError } = this.props;
      const labelClass = "col-md-2 col-form-label";
      const textBoxClass = "col-md-4";
      const formGroupClass = "form-group row justify-content-md-center";

      history.listen(() => removeError());

      return (
         <div>
            <div className="justify-content-md-center text-center container">

               <h2>Create new post</h2>
               {errors.message && (<div className="alert alert-danger">{errors.message}</div>)}

               <form className="form" onSubmit={this.handleSubmit}>
                  <div className={formGroupClass}>
                     <label className={labelClass} htmlFor="text">Text:</label>
                     <div className={textBoxClass}>
                        <textarea
                           name="text"
                           className="form-control ml-2" 
                           id="text" 
                           onChange={this.handleChange}
                           value={text}
                           autoComplete="false"
                           rows="10"
                        />
                     </div>
                  </div>
                  <button type="submit" className="btn btn-primary" >Save</button>
               </form>
            </div>
         </div>
      );
   };
};

function mapStateToProps(state) {
   return {
      errors: state.errors,
   }
}

const redux = connect(mapStateToProps, { createPost, removeError });
export default redux(PostForm);