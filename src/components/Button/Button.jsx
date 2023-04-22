import PropTypes from 'prop-types';

import { StyledLoadMoreButton } from './Button.styled';

export const Button = ({ text, clickHandler }) => {
  return (
    <StyledLoadMoreButton onClick={clickHandler}> {text}</StyledLoadMoreButton>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
