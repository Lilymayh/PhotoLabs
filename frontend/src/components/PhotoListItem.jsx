import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoListItem = ({ data }) => {
  return (
    <section className="photo-list__item" id={data.id}>
      <img className="photo-list__image" src={data.imageSource} />
      <PhotoFavButton />
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
