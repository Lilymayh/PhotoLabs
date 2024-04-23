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
    isFavPhotoExist: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'OPEN_MODAL':
        return { ...state, displayModal: true, selectedPhoto: action.payload };
      case 'CLOSE_MODAL':
        return { ...state, displayModal: false, selectedPhoto: null };
      case 'TOGGLE_LIKE':
        // const photoId = action.payload;
        // const updatedFavorites = state.favorites.includes(photoId)
        //   ? state.favorites.filter(id => id !== photoId) // Remove from favorites if already liked
        //   : [...state.favorites, photoId]; 
        // return { ...state, favorites: updatedFavorites };
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
    dispatch({ type: 'OPEN_MODAL', payload: photo });
  };

  const handleCloseModal = () => {
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
    setPhotoSelected,
    onClosePhotoDetailsModal: handleCloseModal,
    handleLike,
  };
};

export default useApplicationData;

