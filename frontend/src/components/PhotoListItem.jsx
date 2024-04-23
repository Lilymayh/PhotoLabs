import React, { useState } from 'react';

import useApplicationData from '../hooks/useApplicationData';
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, setPhotoSelected, handleLike, favorites }) => {

  const handleClick = () => {
    setPhotoSelected(photo);
  };

  return (
    <section className="photo-list__item" id={photo.id} onClick={handleClick}>
      <div className="photo-list__image-container">
      <PhotoFavButton onClick={() => handleLike(photo.id)} isLiked={favorites.includes(photo.id)}/>
      <img className="photo-list__image" src={photo.urls.regular} />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info"> 
          <span>{photo.user.name}</span>
          <span className="photo-list__user-location" > {photo.location.city}, {photo.location.country}</span>
        </div>
      </div>
    </section>
  );
};


export default PhotoListItem;
