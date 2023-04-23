import PropTypes from 'prop-types';

import { Overlay, StyledModal } from './Modal.styled';
import { useEffect } from 'react';

export const Modal = ({ largeImage, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleModalClose);
    return () => {
      window.removeEventListener('keydown', handleModalClose);
    };
  });

  const handleModalClose = e => {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <Overlay onClick={handleModalClose}>
      <StyledModal>
        <img src={largeImage} alt="pic" />
      </StyledModal>
    </Overlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImage: PropTypes.string,
};
