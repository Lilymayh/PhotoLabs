import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import PhotoList from './components/PhotoList';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import TopNavigation from './components/TopNavigationBar';
import useApplicationData from './hooks/useApplicationData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const {
    state,
    selectedPhoto,
    similarPhotos,
    fetchPhotosByTopic,
    handleLike,
    setPhotoSelected,
    handleOpenModal,
    handleCloseModal,
  } = useApplicationData();

  const { photoData, topicData } = state;

  console.log(selectedPhoto)
  return (
    <Router>
      <div className="App">
        <TopNavigation isFavPhotoExist={state.isFavPhotoExist} topicData={topicData} fetchPhotosByTopic={fetchPhotosByTopic} />
        <PhotoList
          photos={photoData}
          handleOpenModal={handleOpenModal}
          setPhotoSelected={setPhotoSelected}
          favorites={state.favorites}
          handleLike={handleLike}
          
        />
        {selectedPhoto &&
          <PhotoDetailsModal
            onClose={handleCloseModal}
            photo={selectedPhoto}
            setPhotoSelected={setPhotoSelected}
            similarPhotos={similarPhotos}
            favorites={state.favorites}
            handleLike={handleLike}
          />}
        <Routes>
          <Route path="/" element={<HomeRoute photoData={photoData} topicData={topicData} favorites={state.favorites} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;