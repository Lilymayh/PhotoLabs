import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {
    state,
    toggleFavorites,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  const { displayModal, selectedPhoto, similarPhotos, favorites } = state;

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setPhotoSelected}
        similarPhotos={similarPhotos}
        favorites={favorites}
        toggleFavorite={toggleFavorites}
      />
      {displayModal && selectedPhoto &&
        <PhotoDetailsModal
          onClose={onClosePhotoDetailsModal}
          selectedPhoto={selectedPhoto}
          photosByLocation={similarPhotos}
          favorites={favorites}
          toggleFavorite={toggleFavorites}
        />
      }
    </div>
  );
};

export default App;
