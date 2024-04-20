import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem'

const PhotoDetailsModal = ({ data, onClose }) => {
  const handleCloseClick = () => {
    onClose(); 
  }

  console.log(data)
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
