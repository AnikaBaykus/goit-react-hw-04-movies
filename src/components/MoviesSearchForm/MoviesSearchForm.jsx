import s from './MoviesSearchForm.module.css';
import { useState } from 'react';

export default function MoviesSearchForm(options) {
  const [movies, setMovies] = useState('');

  const handleNameChange = event => {
    setMovies(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (movies.trim() === '') {
      return console.log('нет такого фильма');
    }
    options.onSearchFormSubmit(movies);
    setMovies('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.SearchForm}>
      <input
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={movies}
        onChange={handleNameChange}
      />
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>
    </form>
  );
}
