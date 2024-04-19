import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onClick, isLiked }) {
  return (
    <button onClick={onClick}>
      <FavIcon className={`"photo-list__fav-icon" ${isLiked ? "photo-list__fav-icon-svg" : ""}`} selected={isLiked} />
    </button>
  );
}

export default PhotoFavButton;