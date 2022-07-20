import { useState } from 'react';
import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

function SearchBar({ onSubmit }) {
  const [inputValue, SetinputValue] = useState('');

  const handleInputChange = e => {
    SetinputValue(e.currentTarget.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (inputValue === '') {
      alert('Введите название');
      return;
    }

    onSubmit(inputValue);
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={onFormSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}></button>

        <input
          onChange={handleInputChange}
          value={inputValue}
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
