import React, { useState } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';


const TopNavigation = ( {isFavPhotoExist, topicData } ) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
  )
}

export default TopNavigation;