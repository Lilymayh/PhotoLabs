import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ data }) => {
  return (
    <div className="topic-list__item">
     <p>{data.title}</p>
    </div>
  );
};

export default TopicListItem;
