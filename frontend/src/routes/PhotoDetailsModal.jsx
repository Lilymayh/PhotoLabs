import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';


const PhotoDetailsModal = ({ photo, onClose, similarPhotos, favorites, handleLike }) => {
  const handleCloseClick = () => {
    onClose();
  };
  const isSelectedPhotoFavorite = photo && favorites.includes(photo.id);
  return (
    <div className="photo-details-modal">
      <div >
        <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal_conatainer">
        <img className="photo-details-modal__image" src={photo.urls.full} />
        <PhotoFavButton onClick={() => handleLike(photo.id)} isLiked={isSelectedPhotoFavorite} />
        <div className="photo-details-modal__photographer-info">
          <img className="photo-details-modal__photographer-profile" src={photo.user.profile} />
          <div className="photo-details-modal__photographer-info-right">
            <span className="photo-details-modal__photographer-details">{photo.user.name}</span>
            <span className="photo-details-modal__photographer-location"> {photo.location.city}, {photo.location.country}</span>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList photos={photo.similar_photos}
          favorites={favorites}
          handleLike={handleLike}
          isSelectedPhotoFavorite={isSelectedPhotoFavorite} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
