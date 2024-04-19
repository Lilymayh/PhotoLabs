import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
    setFavorites([...favorites, photoId]);
    }
  };

  const isFavPhotoExist = favorites.length > 0;


  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;
