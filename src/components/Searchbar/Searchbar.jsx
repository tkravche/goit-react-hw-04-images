import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

import {
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchbar,
  StyledSearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onFormSubmit }) => {
  const [search, setSearch] = useState('');

  const onInputChange = ({ target: { value } }) => {
    setSearch(value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      return toast.info('Please enter key words for search');
    }
    onFormSubmit(search);
    setSearch(' ');
  };

  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledSearchFormButton type="submit">
          <FaSearch />
        </StyledSearchFormButton>

        <StyledSearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={onInputChange}
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
