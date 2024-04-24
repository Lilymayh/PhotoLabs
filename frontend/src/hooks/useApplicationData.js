import { useReducer } from 'react';

import { useEffect } from 'react';


const useApplicationData = () => {
  const initialState = {
    displayModal: false,
    selectedPhoto: null,
    photoData: [],
    topicData: [],
    favorites: [],
    isFavPhotoExist: false,
    selectedTopicId: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_PHOTO_DATA':
        return { ...state, photoData: action.payload };
      case 'SET_PHOTOS_BY_TOPIC':
        return { ...state, photoData: action.payload.photos };
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

  useEffect(() => {
    if (state.selectedTopicId !== null) {
      fetch(`/api/topics/photos/${state.selectedTopicId}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'SET_PHOTOS_BY_TOPIC', payload: { topicId: selectedTopicId, photos: data } });
        });
    }
  }, [state.selectedTopicId]);

  const handleOpenModal = (photoId) => {
    console.log("Photo ID:", photoId);
    const selectedPhoto = state.photoData.find(photo => photo.id === photoId);
    console.log("Selected: ", selectedPhoto);
    dispatch({ type: 'OPEN_MODAL', payload: selectedPhoto });
  };

  const handleCloseModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleLike = (photoId) => {
    dispatch({ type: 'TOGGLE_LIKE', payload: photoId });
  };

  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: 'SET_PHOTOS_BY_TOPIC', payload: { topicId, photos: data } });
      })
      .catch((error) => console.error(error));
  };

  const similarPhotos = state.selectedPhoto && state.selectedPhoto.similar_photos
    ? state.photoData.filter(photo => Object.values(state.selectedPhoto.similar_photos).includes(photo.id))
    : [];
  

  return {
    state,
    similarPhotos,
    selectedPhoto: state.selectedPhoto,
    isFavPhotoExist: state.isFavPhotoExist,
    displayModal: state.displayModal,
    selectedTopicId: state.selectedTopicId,
    handleOpenModal,
    fetchPhotosByTopic,
    handleCloseModal,
    handleLike,
  };
};

export default useApplicationData;

