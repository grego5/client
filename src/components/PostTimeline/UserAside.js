import React from 'react';
import defaultImage from '../../images/default-profile-image.jpg';

const UserAside = props => {
   const {image, user, className} = props;
   return (
      <aside className={className}>
         <div className="panel panel-default">
            <div className="panel-body">
               <img 
                  className="img-thumbnail" 
                  src={image || defaultImage} 
                  alt={user.username} 
               />
               <h5>{user.username}</h5>
            </div>
         </div>
      </aside>
   )
}
   

export default UserAside;