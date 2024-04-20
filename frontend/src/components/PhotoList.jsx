import React, { useState } from "react";

import Modal from "../routes/PhotoDetailsModal";
import "../styles/PhotoList.scss";
import PhotoListItem from "../components/PhotoListItem";
import photos from "../mocks/photos"


const PhotoList = ( {favorites, toggleFavorite, setDisplayModal} ) => {

  return (
    <section className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} 
        data={photo} 
        toggleFavorite={toggleFavorite} 
        favorites={favorites}
        setDisplayModal={setDisplayModal}/>
      ))}
      <Modal />
    </section>
  );
};

export default PhotoList;
