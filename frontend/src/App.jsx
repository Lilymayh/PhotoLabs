import React, { useState } from 'react';
import Modal from './routes/PhotoDetailsModal';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar'

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList setDisplayModal={setDisplayModal} />
      {displayModal && <Modal />} 
    </div>
  );
};

export default App;
