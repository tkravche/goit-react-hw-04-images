import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

import {
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchbar,
  StyledSearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ search: value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      return toast.info('Please enter key words for search');
    }
    this.props.onFormSubmit(this.state.search);
    this.setState({ search: ' ' });
  };

  render() {
    return (
      <StyledSearchbar>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledSearchFormButton type="submit">
            <FaSearch />
          </StyledSearchFormButton>

          <StyledSearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.onInputChange}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
