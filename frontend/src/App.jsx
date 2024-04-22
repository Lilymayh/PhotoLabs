import React, { useState } from 'react';
import Modal from './routes/PhotoDetailsModal';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar'

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  const handleCloseModal = () => {
    setDisplayModal(false);
    setSelectedPhoto(null);
  }

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList setDisplayModal={setDisplayModal} setSelectedPhoto={setSelectedPhoto}/>
      {displayModal && selectedPhoto && 
      <Modal onClose={handleCloseModal} selectedPhoto={selectedPhoto}/>} 
    </div>
  );
};

export default App;
