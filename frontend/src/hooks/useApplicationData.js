import { useState } from 'react';

const useApplicationData = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleCloseModal = () => {
    setDisplayModal(false);
    setSelectedPhoto(null);
    setSimilarPhotos([]);
  };

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };

  return {
    state: { displayModal, selectedPhoto, similarPhotos, favorites },
    toggleFavorites: setFavorites,
    setPhotoSelected: setSelectedPhoto,
    onClosePhotoDetailsModal: handleCloseModal
  };
};

export default useApplicationData;