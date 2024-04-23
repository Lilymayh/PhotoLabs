import { useReducer } from 'react';
import mockPhotos from '../mocks/photos';
import mockTopics from '../mocks/topics';

const useApplicationData = () => {
  const initialState = {
    displayModal: false,
    selectedPhoto: null,
    photos: mockPhotos,
    topics: mockTopics,
    favorites: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'OPEN_MODAL':
        return { ...state, displayModal: true, selectedPhoto: action.payload };
      case 'CLOSE_MODAL':
        return { ...state, displayModal: false, selectedPhoto: null };
      case 'TOGGLE_LIKE':
        return { ...state, favorites: toggleFavorite(state.favorites, action.payload) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setPhotoSelected = (photo) => {
    dispatch({ type: 'OPEN_MODAL', payload: photo });
  };

  const handleCloseModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleLike = (photoId) => {
    dispatch({ type: 'TOGGLE_LIKE', payload: photoId });
  };

  const toggleFavorite = (photo) => {
    if (favorites.includes(photo.id)) {
      setFavorites(favorites.filter(id => id !== photo));
    } else {
      setFavorites([...favorites, photo]);
    }
  };

  const similarPhotos = state.selectedPhoto
    ? state.photos.filter(photo => state.selectedPhoto.similar_photos?.includes(photo.id))
    : [];


  return {
    state,
    selectedPhoto: state.selectedPhoto,
    similarPhotos,
    setPhotoSelected,
    onClosePhotoDetailsModal: handleCloseModal,
    handleLike,
  };
};

export default useApplicationData;
