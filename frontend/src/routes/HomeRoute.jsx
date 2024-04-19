import { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
    setFavorites([...favorites, photoId]);
    }
  };

  return (
    <div className="home-route">
      <PhotoList favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;
