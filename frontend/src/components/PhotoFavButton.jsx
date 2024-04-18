import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [like, setLike] = useState('off');

  const handleLike = () => {
    setLike(like === "on" ? "off" : "on");
  };
  return (
    <button onClick={handleLike}>
      <span className={like === "off" ? "photo-list__fav-icon" : "photo-list__fav-icon-svg"} />
    </button>
  );
}

export default PhotoFavButton;