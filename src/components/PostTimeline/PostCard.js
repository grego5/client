import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import defaultImage from '../../images/default-profile-image.jpg';

const PostCard = props => {
   const {text, date, image, user} = props;
   debugger;
   return (
      <div className="card d-flex flex-row">
         <div className="">
            <img src={image || defaultImage} alt={user.username} className="img-fluid w-50"/>
            <h4>{user.username}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
         </div>
         <div className="card-body flex-grow-1">
            <p className="card-text">{text}</p>
         </div>
      </div>
   )
}
   

export default PostCard;