import React from 'react';
import PostList from '../containers/PostList';

const PostTimeline = props => {
   return (
      <div className="row">
         <div className="col-4">
            <PostList />
         </div>
      </div>
   )
}

export default PostTimeline;