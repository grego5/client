import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import defaultImage from '../../images/default-profile-image.jpg';

const PostCard = props => {
   const {text, date, image, user, deletePost, canDelete} = props;
   
   return (
      <div className="post card d-flex flex-row">
         <div className="card-aside">
            <img src={image || defaultImage} alt={user.username} className="img-fluid w-50"/>
            <Link to='/'><h5>@{user.username}</h5></Link>
            <h6 className="card-subtitle mb-2 text-muted">
               <Moment format="Do MMM YYYY">
                  {date}
               </Moment>
            </h6>
            {canDelete && (<button className="btn btn-link" onClick={deletePost}>Delete</button>)}
            
         </div>
         <div className="card-body flex-grow-1">
            <p className="card-text">{text}</p>
         </div>
      </div>
   )
}
   

export default PostCard;