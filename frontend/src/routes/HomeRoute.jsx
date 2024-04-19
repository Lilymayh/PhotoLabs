import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <PhotoList/>
    </div>
  );
};

export default HomeRoute;
