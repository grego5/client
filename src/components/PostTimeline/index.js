import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../../store/actions/posts';
import PostCard from './PostCard.js';
import UserAside from './UserAside.js';

class PostTimeline extends Component {
   componentDidMount() {
      this.props.getPosts();
   }

   render() {
      console.log('timeline rendered');
      const {currentUser, deletePost} = this.props;
      const posts = this.props.posts.map(p => <PostCard 
         key={p._id} 
         {...p}
         deletePost={()=>{deletePost(p._id)}}
         canDelete={currentUser.user.id === p.user._id}
      />);


      return (
         <div className="row">
            <UserAside className="col-sm-3" {...currentUser} />
            <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center w-50 mx-auto">
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