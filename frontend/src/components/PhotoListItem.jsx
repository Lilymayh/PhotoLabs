import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data }) => {
  return (
    <ul className="photo-list__item" id={data.id}>
      <img className="photo-list__image" src={data.imageSource} />
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={data.profile} />
      <p className="photo-list__user-info">{data.username}</p>
      <p className="photo-list__user-location" > {data.location.city}, {data.location.country}</p>
      </div>
    </ul>
  );
};

export default PhotoListItem;
