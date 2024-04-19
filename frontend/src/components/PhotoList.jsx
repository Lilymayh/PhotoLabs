import React, { useState } from "react";

import "../styles/PhotoList.scss";
import Modal from "../routes/PhotoDetailsModal"
import PhotoListItem from "../components/PhotoListItem";
import photos from "../mocks/photos"


const PhotoList = ( {favorites, toggleFavorite} ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} onClick={openModal} data={photo} toggleFavorite={toggleFavorite} favorites={favorites}/>
      ))}
      <Modal isOpen={isModalOpen}/>
    </section>
  );
};

export default PhotoList;
