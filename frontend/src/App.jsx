import React, { useState } from 'react';
import Modal from './routes/PhotoDetailsModal';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar'

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState();


  const handleCloseModal = () => {
    setDisplayModal(false); 
  }

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList setDisplayModal={setDisplayModal} setSelectedPhoto={setSelectedPhoto}/>
      {displayModal && <Modal onClose={handleCloseModal} selectedPhoto={selectedPhoto}/>} 
    </div>
  );
};

export default App;
