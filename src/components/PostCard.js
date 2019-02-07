import React from 'react';

const PostCard = ({text}) => (
   <div class="card">
      <div class="card-body">
         <p class="card-text">{text}</p>
      </div>
   </div>
)

export default PostCard;