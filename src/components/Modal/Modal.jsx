import PropTypes from 'prop-types';

import { Overlay, StyledModal } from './Modal.styled';
import { useEffect } from 'react';

export const Modal = ({ largeImage, onClose }) => {
  useEffect(() => {
    const handleModalClose = e => {
      if (e.key === 'Escape' || e.target === e.currentTarget) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleModalClose);
    return () => {
      window.removeEventListener('keydown', handleModalClose);
    };
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
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
