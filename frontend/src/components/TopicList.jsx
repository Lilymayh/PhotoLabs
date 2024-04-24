import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from '../components/TopicListItem';


const TopicList = ({ topicData, fetchPhotosByTopic }) => {
  const handleTopicClick = (topicId) => {
    console.log("Topic:", topicId);
    console.log("Fetch photos by topic function:", fetchPhotosByTopic);
    fetchPhotosByTopic(topicId);
  };
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => (
        <div key={topic.id} onClick={() => handleTopicClick(topic.id)}>
          <TopicListItem key={topic.id} title={topic.title} />
        </div>
      ))}
    </div>
  );
};




export default TopicList;
