import React, { useState } from 'react';

import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(isLiked === false ? true : false);
  };
  return (
    <section className="photo-list__item" id={data.id}>
      <PhotoFavButton onClick={handleLike} isLiked={isLiked}/>
      <img className="photo-list__image" src={data.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={data.profile} />
        <div className="photo-list__user-info">
          <span>{data.username}</span>
          <div className="photo-list__user-location" > {data.location.city}, {data.location.country}</div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
