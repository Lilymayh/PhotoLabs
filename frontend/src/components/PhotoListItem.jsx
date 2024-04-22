import React, { useState } from 'react';

import useApplicationData from '../hooks/useApplicationData';
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data, onClick }) => {
  const { state, updateToFavPhotoIds } = useApplicationData();
  const { favorites: appFavorites } = state;


  const handleLike = () => {
    if (appFavorites.includes(data.id)) {
      updateToFavPhotoIds(appFavorites.filter(id => id !== data.id));
    } else {
      updateToFavPhotoIds([...appFavorites, data.id]);
    }
  };
  const handleClick = () => {
    onClick(data);
  }

  return (
    <section className="photo-list__item" id={data.id} onClick={handleClick}>
      <div className="photo-list__image-container">
      <PhotoFavButton onClick={handleLike} isLiked={appFavorites.includes(data.id)}/>
      <img className="photo-list__image" src={data.urls.regular} />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={data.user.profile} />
        <div className="photo-list__user-info"> 
          <span>{data.user.name}</span>
          <span className="photo-list__user-location" > {data.location.city}, {data.location.country}</span>
        </div>
      </div>
    </section>
  );
};


export default PhotoListItem;
