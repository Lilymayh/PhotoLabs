import React, { useState } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "../components/PhotoListItem";


const PhotoList = ({ setPhotoSelected, handleLike, favorites, photos, handleOpenModal }) => {

  return (
    <section className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          handleLike={handleLike}
          favorites={favorites}
          setPhotoSelected={setPhotoSelected}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </section>
  );
};

export default PhotoList;
