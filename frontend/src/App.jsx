import React from 'react';

import PhotoList from './components/PhotoList'
import './App.scss';
import TopNavigation from 'components/TopNavigationBar';

const App = () => {
  
  return (
    <div className="App">
    <TopNavigation/>
    <PhotoList />
    </div>
  );
};

export default App;
