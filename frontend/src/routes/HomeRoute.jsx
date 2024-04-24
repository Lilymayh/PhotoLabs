import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ photoData, topicData, favorites }) => {

  return (
    <div className="home-route">
      {/* <TopNavigation isFavPhotoExist={favorites.length > 0} topicData={topicData}/>
      <PhotoList
       photos={photoData} 
      favorites={favorites} /> */}
    </div>
  );
};

export default HomeRoute;
