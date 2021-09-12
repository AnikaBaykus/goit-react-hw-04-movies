import { useState, useEffect, lazy, Suspense } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import * as APIsearchMovies from '../service/api-movies';
import MoviesSearchForm from '../MoviesSearchForm';

const MoviesSearchResult = lazy(() =>
  import(
    '../MoviesSearchForm/MovieSearchResult.jsx' /* webpackChunkName: "Search_Result" */
  ),
);

export default function MoviesPage(options) {
  const history = useHistory();
  const location = useLocation();

  const [query, setQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    const backSearch = new URLSearchParams(location.search).get('query');
    setQuery(backSearch);
  }, [location.search]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    APIsearchMovies.fetchSearchMovies(query)
      .then(query => {
        setSearchMovie(query.results);
      })
      .catch(error => error);
  }, [query]);

  const handleSearchFormSubmit = data => {
    setQuery(data.trim());
    history.push({ ...location, search: `query=${data}` });
    console.log(history);
  };
  return (
    <>
      <MoviesSearchForm
        query={query}
        onSearchFormSubmit={handleSearchFormSubmit}
      />
      {query !== '' && (
        <Suspense fallback={<p>Loading...</p>}>
          <MoviesSearchResult
            query={query}
            searchMovie={searchMovie}
            locationSearch={location.search}
          />
        </Suspense>
      )}
    </>
  );
}
