import PropTypes from 'prop-types';

import { Overlay, StyledModal } from './Modal.styled';
import { useEffect } from 'react';

export const Modal = largeImage => {
  useEffect(() => {
    window.addEventListener('keydown', handleModalClose);
    window.removeEventListener('keydown', handleModalClose);
  });

  const handleModalClose = e => {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      this.props.onClose();
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
