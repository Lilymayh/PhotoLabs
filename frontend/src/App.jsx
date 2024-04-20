import React, { useState } from 'react';
import Modal from './routes/PhotoDetailsModal';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar'

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const handleCloseModal = () => {
    setDisplayModal(false); 
  }

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList setDisplayModal={setDisplayModal} />
      {displayModal && <Modal onClose={handleCloseModal}/>} 
    </div>
  );
};

export default App;
