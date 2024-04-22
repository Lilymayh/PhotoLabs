import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList'


const PhotoDetailsModal = ({ selectedPhoto, onClose, photosByLocation }) => {
  const handleCloseClick = () => {
    onClose(); 
  }

  const locationKey = selectedPhoto.location ? `${selectedPhoto.location.city}, ${selectedPhoto.location.country}` : '';
  const similarPhotos = photosByLocation && photosByLocation[locationKey]
  ? photosByLocation[locationKey]
  : [];


  return (
    <div className="photo-details-modal">
       <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img className="photo-details-modal__image" src={selectedPhoto.urls.full}/>
      <div className="photo-list__user-info"> 
      <img className="photo-list__user-profile" src={selectedPhoto.user.profile} />
          <span>{selectedPhoto.user.name}</span>
          <span> {selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
        </div>
        <div className="photo-details-modal__images">
        <PhotoList photos={similarPhotos} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
