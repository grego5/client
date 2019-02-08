import React from 'react';
import { Link } from 'react-router-dom';
import PostTimeline from '../PostTimeline'

const Homepage = ({ currentUser }) => {
   return (currentUser.isAuthenticated) ? (
      <div className="container">
         <h1 className="text-center">You've made it</h1>
         <PostTimeline />
      </div>
   ) : (
      <div className="jumbotron">
         <div className="container">
            <h1 className="display-4">Let's Communicate</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <Link to="/register" className="btn btn-primary btn-lg">Sign up here</Link>
         </div>
      </div>
   );
};

export default Homepage;