import s from './MoviesSearchForm.module.css';
import { useState } from 'react';

export default function MoviesSearchForm(options) {
  // const [movies, setMovies] = useState('');
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      console.log('нет такого фильма');
      return;
    }
    options.onSearchFormSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.SearchForm}>
      <input
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={query}
        onChange={handleNameChange}
      />
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>
    </form>
  );
}
