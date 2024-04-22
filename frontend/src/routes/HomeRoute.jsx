import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ favorites, toggleFavorite }) => {
  const [displayModal, setDisplayModal] = useState(false);


  const isFavPhotoExist = favorites.length > 0;


  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList
      setDisplayModal={setDisplayModal}
      favorites={favorites} 
      toggleFavorite={toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;
