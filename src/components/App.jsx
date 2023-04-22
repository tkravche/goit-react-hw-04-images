import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchPictures } from '../services/pictures-api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { StyledApp } from './App.styled';
import { useEffect, useState } from 'react';

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [totalPictures, setTotalPictures] = useState(null);
  const [largeImageUrl, setLargeImageUrl] = useState(null);

  useEffect(() => {
    if (search === '') {
      return;
    }
    setIsLoading(true);
    fetchPictures(search, page)
      .then(({ data: { hits, totalHits } }) => {
        setPictures(prevState => [...prevState, ...hits]);
        setTotalPictures(totalHits);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [search, page]);

  const handleSubmit = search => {
    setSearch(search);
    // setPictures([]);
    // setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = largePicture => {
    setLargeImageUrl(largePicture);
  };

  const closeModal = () => {
    setLargeImageUrl(null);
  };

  return (
    <StyledApp>
      <ToastContainer transition={Slide} draggablePercent={60} />
      <Searchbar onFormSubmit={handleSubmit} />

      {isLoading && <Loader />}

      {pictures.length !== 0 && (
        <ImageGallery pictures={pictures} openModal={openModal} />
      )}

      {pictures.length !== 0 && totalPictures !== pictures.length && (
        <Button text="Load more" clickHandler={loadMore} />
      )}

      {largeImageUrl && (
        <Modal largeImage={largeImageUrl} onClose={closeModal} />
      )}
    </StyledApp>
  );
};
