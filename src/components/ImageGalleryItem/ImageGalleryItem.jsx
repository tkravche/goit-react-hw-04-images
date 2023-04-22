import PropTypes from 'prop-types';
import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  picture: { largeImageURL, webformatURL, tags },
  openModal,
}) => {
  return (
    <StyledImageGalleryItem
      onClick={() => {
        openModal(largeImageURL);
      }}
    >
      <StyledImageGalleryItemImg src={webformatURL} alt={tags} loading="lazy" />
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func.isRequired,
};
