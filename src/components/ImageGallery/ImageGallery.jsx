import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ pictures, openModal }) => {
  return (
    <StyledImageGallery>
      {pictures.map(picture => {
        return (
          <ImageGalleryItem
            key={picture.id}
            picture={picture}
            openModal={openModal}
          />
        );
      })}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};
