import { useReducer } from 'react';

import { useEffect } from 'react'


const useApplicationData = () => {
  const initialState = {
    displayModal: false,
    selectedPhoto: null,
    photoData: [],
    topicData: [],
    favorites: [],
    isFavPhotoExist: false,
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TOPIC_DATA', payload: data }));
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_PHOTO_DATA':
        return { ...state, photoData: action.payload };
        case 'SET_TOPIC_DATA':
        return { ...state, topicData: action.payload };
      case 'OPEN_MODAL':
        return { ...state, displayModal: true, selectedPhoto: action.payload };
      case 'CLOSE_MODAL':
        return { ...state, displayModal: false, selectedPhoto: null };
      case 'TOGGLE_LIKE':
        const photoId = action.payload;
        const updatedFavorites = state.favorites.includes(photoId)
          ? state.favorites.filter(id => id !== photoId)
          : [...state.favorites, photoId];
        const isFavPhotoExist = updatedFavorites.length > 0;
        return { ...state, favorites: updatedFavorites, isFavPhotoExist };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setPhotoSelected = (photo) => {
    console.log("Selected photo:", photo);
    dispatch({ type: 'OPEN_MODAL', payload: photo });
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleLike = (photoId) => {
    dispatch({ type: 'TOGGLE_LIKE', payload: photoId });
  };

  const similarPhotos = state.selectedPhoto && state.selectedPhoto.similar_photos
    ? state.photos.filter(photo => Object.values(state.selectedPhoto.similar_photos).includes(photo.id))
    : [];


  return {
    state,
    similarPhotos,
    isFavPhotoExist: state.isFavPhotoExist,
    displayModal: state.displayModal,
    setPhotoSelected,
    onClosePhotoDetailsModal: handleCloseModal,
    handleLike,
  };
};

export default useApplicationData;

