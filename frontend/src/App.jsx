import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar';

const App = () => {
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
      setFavorites(favorites.filter(id => id !== photoId)); // Remove photoId from favorites
    } else {
      setFavorites([...favorites, photoId]); // Add photoId to favorites
    }
  };


  return (
    <div className="App">
      <TopNavigation />
      <PhotoList setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
        similarPhotos={similarPhotos}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      {displayModal && selectedPhoto &&
        <PhotoDetailsModal
          onClose={handleCloseModal}
          selectedPhoto={selectedPhoto}
          photosByLocation={similarPhotos}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      }
    </div>
  );
};

export default App;
