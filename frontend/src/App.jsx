import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar'

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);
  const [isFavorite, toggleFavorite] = useState(false); 


  const handleCloseModal = () => {
    setDisplayModal(false);
    setSelectedPhoto(null);
    setSimilarPhotos([]);
  }

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList setDisplayModal={setDisplayModal} setSelectedPhoto={setSelectedPhoto} similarPhotos={similarPhotos}/>
      {displayModal && selectedPhoto && 
        <PhotoDetailsModal
          onClose={handleCloseModal}
          selectedPhoto={selectedPhoto}
          photosByLocation={similarPhotos}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      } 
    </div>
  );
};

export default App;
