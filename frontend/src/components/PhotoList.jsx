import React, { useState } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "../components/PhotoListItem";
import useApplicationData from '../hooks/useApplicationData';


const PhotoList = ({ setPhotoSelected, handleLike, favorites, photos }) => {

  return (
    <section className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          handleLike={handleLike}
          favorites={favorites}
          setPhotoSelected={setPhotoSelected}
        />
      ))}
    </section>
  );
};

export default PhotoList;
