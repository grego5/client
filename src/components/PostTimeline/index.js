import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/posts';
import PostCard from './PostCard.js';

class PostTimeline extends Component {
   componentDidMount() {
      this.props.getPosts();
   }

   render() {
      const posts = this.props.posts.map(p => <PostCard key={p._id} {...p} />);

      return (
         <div className="d-flex flex-column justify-content-center align-items-center">
               <div>{posts}</div>
         </div>
      );
   };
};

function mapStateToProps(state) {
   return {
      posts: state.posts
   };
}

const redux = connect(mapStateToProps, { getPosts });
export default redux(PostTimeline);