import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';


const PhotoDetailsModal = ({ onClose, selectedPhoto, similarPhotos, favorites, handleLike }) => {
  const handleCloseClick = () => {
    onClose(); 
  }
  
  console.log("Props in PhotoDetailsModal:", { onClose, selectedPhoto, similarPhotos, favorites, handleLike });


  const isSelectedPhotoFavorite = favorites.includes(selectedPhoto.id);

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
        {/* <div className="photo-details-modal__images">
          {similarPhotos.map(photo => (
             <img key={photo.id} src={photo.similar_photos} alt={`Similar photo ${photo.id}`} />
          ))}
      </div> */}
      <PhotoFavButton onClick={() => handleLike(selectedPhoto.id)} isLiked={isSelectedPhotoFavorite} />
    </div>
  )
};

export default PhotoDetailsModal;
