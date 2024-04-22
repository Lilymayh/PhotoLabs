import React, { useState } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "../components/PhotoListItem";
import photos from '../mocks/photos'
import useApplicationData from '../hooks/useApplicationData'


const PhotoList = ({ photos }) => {
  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal } = useApplicationData();
  const { favorites, similarPhotos, displayModal, selectedPhoto } = state;

  const handleClick = (photo) => {
    setSelectedPhoto(photo)
    setDisplayModal(true);
  };

  return (
    <section className="photo-list">
     {photos.map((photo) => (
          <PhotoListItem
            key={photo.id}
            data={photo}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
            onClick={handleClick}
          />
        ))}
    </section>
  );
};

export default PhotoList;
