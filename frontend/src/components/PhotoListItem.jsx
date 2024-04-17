import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data }) => {
  return (
    <div id={data.id}>
      <img src={data.imageSource} />
      <img src={data.profile} />
      <p>{data.username}</p>
      <p> {data.location.city}, {data.location.country}</p>
    </div>
  );
};

export default PhotoListItem;
