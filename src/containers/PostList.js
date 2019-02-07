import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions/posts';
import PostCard from '../components/PostCard.js';

class PostList extends Component {
   componentDidMount() {
      this.props.getPosts();
   }

   render() {
      const { posts } = this.props;
      let postList = posts.map(p => (
         <PostCard key={p._id} {...p} />
      ))
      return (
         <div>{postList}</div>
      );
   };
};

function mapStateToProps(state) {
   return {
      posts: state.posts
   };
}

const redux = connect(mapStateToProps, { getPosts });
export default redux(PostList);