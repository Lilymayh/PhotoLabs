import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const App = () => {

  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };
  
  return (
    <div className="App">
       {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
       <PhotoListItem data={sampleDataForPhotoListItem} />
    </div>
  );
};

export default App;
