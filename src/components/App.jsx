import { Component } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchPictures } from '../services/pictures-api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { StyledApp } from './App.styled';

export default class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    page: 1,
    search: ' ',
    error: '',
    totalPictures: null,
    largeImageUrl: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.getPictures();
    }
  }

  getPictures = () => {
    this.setState({ isLoading: true });
    fetchPictures(this.state.search, this.state.page)
      .then(({ data: { hits, totalHits } }) => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...hits],
          totalPictures: totalHits,
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSubmit = search => {
    this.setState(prevState =>
      prevState.search !== search
        ? { pictures: [], search, page: 1 }
        : { search }
    );
  };
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = largePicture => {
    this.setState({ largeImageUrl: largePicture });
  };

  closeModal = () => {
    this.setState({ largeImageUrl: null });
  };
  render() {
    return (
      <StyledApp>
        <ToastContainer transition={Slide} draggablePercent={60} />
        <Searchbar onFormSubmit={this.handleSubmit} />

        {this.state.isLoading && <Loader />}

        {this.state.pictures.length !== 0 && (
          <ImageGallery
            pictures={this.state.pictures}
            openModal={this.openModal}
          />
        )}

        {this.state.pictures.length !== 0 &&
          this.state.totalPictures !== this.state.pictures.length && (
            <Button text="Load more" clickHandler={this.loadMore} />
          )}

        {this.state.largeImageUrl && (
          <Modal
            largeImage={this.state.largeImageUrl}
            onClose={this.closeModal}
          />
        )}
      </StyledApp>
    );
  }
}
