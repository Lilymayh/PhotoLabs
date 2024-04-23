import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from '../components/TopicListItem';

const TopicList = ({ topicData }) => {
  console.log("Received topicData:", topicData);
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => (
        <TopicListItem key={topic.id} title={topic.title} />
      ))}
    </div>
  );
};


export default TopicList;
