import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "../components/PhotoListItem";
import photos from "../mocks/photos"


const PhotoList = () => {
  return (
    <section className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} data={photo} toggleFavorite={toggleFavorite} favorites={favorites}/>
      ))}
    </section>
  );
};

export default PhotoList;
