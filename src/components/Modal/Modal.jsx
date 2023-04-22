import { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay, StyledModal } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalClose);
  }

  handleModalClose = e => {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleModalClose}>
        <StyledModal>
          <img src={this.props.largeImage} alt="pic" />
        </StyledModal>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImage: PropTypes.string,
};
