import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(prevIsLiked => !prevIsLiked);
  };
  return (
    <button onClick={handleLike}>
      <FavIcon className={isLiked ? "photo-list__fav-icon" : "photo-list__fav-icon-svg"} selected={isLiked} />
    </button>
  );
}

export default PhotoFavButton;