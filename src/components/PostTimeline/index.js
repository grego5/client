import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../../store/actions/posts';
import PostCard from './PostCard.js';
import UserAside from './UserAside.js';

class PostTimeline extends Component {
   componentDidMount() {
      this.props.getPosts();
   }

   deletePost = (id) => () => {
      this.props.deletePost(id);
   }

   render() {
      const {currentUser} = this.props;
      const posts = this.props.posts.map(p => {
      return <PostCard
         key={p._id} 
         {...p}
         deletePost={this.deletePost(p._id)}
         canDelete={currentUser.user ? currentUser.user.id === p.user._id : false}
      />});


      return (
         <div className="row">
            <UserAside className="col-md-3" {...currentUser} />
            <div className="col-md-9 d-flex flex-column justify-content-center align-items-center w-md-50 mx-auto">
               {posts}
            </div>
         </div>
      );
   };
};

function mapStateToProps(state) {
   return {
      currentUser: state.currentUser,
      posts: state.posts
   };
}

const redux = connect(mapStateToProps, { getPosts, deletePost });
export default redux(PostTimeline);