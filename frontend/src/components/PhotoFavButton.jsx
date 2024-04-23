import React from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton({ onClick, isLiked }) {
  return (
    <button onClick={onClick} className='photo-list__fav-icon'>
      <FavIcon className={`photo-list__fav-icon ${isLiked ? "photo-list__fav-icon-svg" : ""}`} selected={isLiked} />
    </button>
  );
}

export default PhotoFavButton;