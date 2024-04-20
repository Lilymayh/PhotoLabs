import React, { useState } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "../components/PhotoListItem";
import photos from "../mocks/photos"


const PhotoList = ( {favorites, toggleFavorite, setDisplayModal} ) => {

  const handleClick = () => {
    setDisplayModal(true);
  };

  return (
    <section className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} 
        data={photo} 
        toggleFavorite={toggleFavorite} 
        favorites={favorites}
        onClick={handleClick}/>
      ))}
    </section>
  );
};

export default PhotoList;
