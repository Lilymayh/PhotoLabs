import React, { useState } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "../components/PhotoListItem";
import photos from '../mocks/photos'


const PhotoList = ({ favorites, toggleFavorite, setSelectedPhoto, setDisplayModal }) => {
  const groupPhotosByLocation = (photos) => {
    const photosByLocation = {};
    photos.forEach(photo => {
      const locationKey = `${photo.location.city}, ${photo.location.country}`;
      if (!photosByLocation[locationKey]) {
        photosByLocation[locationKey] = [];
      }
      photosByLocation[locationKey].push(photo);
    });
    return photosByLocation;
  };

  const photosByLocation = groupPhotosByLocation(photos);

  const handleClick = (photo) => {
    setSelectedPhoto(photo)
    setDisplayModal(true);
  };

  return (
    <section className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} 
        data={photo} 
        toggleFavorite={toggleFavorite} 
        favorites={favorites}
        onClick={handleClick}
        photosByLocation={photosByLocation}
        />
      ))}
    </section>
  );
};

export default PhotoList;
