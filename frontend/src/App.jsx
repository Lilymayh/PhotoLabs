import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {
    state,
    selectedPhoto,
    similarPhotos,
    handleLike,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList
        photos={state.photos}
        setPhotoSelected={setPhotoSelected}
        favorites={state.favorites}
        handleLike={handleLike}
      />
      {selectedPhoto &&
        <PhotoDetailsModal
          onClose={onClosePhotoDetailsModal}
          selectedPhoto={selectedPhoto}
          similarPhotos={similarPhotos}
          favorites={state.favorites}
          handleLike={handleLike}
        />
      }
    </div>
  );
};

export default App;
