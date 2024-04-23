import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import useApplicationData from '../hooks/useApplicationData';


const HomeRoute = () => {
  const { state, toggleFavorites } = useApplicationData();
  const { favorites } = state;

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={favorites.length > 0}/>
      <PhotoList
      favorites={favorites} />
    </div>
  );
};

export default HomeRoute;
