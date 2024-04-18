import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data }) => {
  return (
    <li className="photo-list__item" id={data.id}>
      <img className="photo-list__image" src={data.imageSource} />
      <img className="photo-list__user-profile" src={data.profile} />
      <p className="photo-list__user-details" >{data.username}</p>
      <p className="photo-list__user-location" > {data.location.city}, {data.location.country}</p>
    </li>
  );
};

export default PhotoListItem;
