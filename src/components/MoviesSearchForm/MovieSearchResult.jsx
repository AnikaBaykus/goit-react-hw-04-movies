import s from './MoviesSearchForm.module.css';
import { Link, Route, useLocation } from 'react-router-dom';
import photo from '../../img/no_poster.jpg';

export default function MoviesSearchResult(options) {
  const { query, searchMovie, updateData } = options;
  const location = useLocation();

  // console.log('локация из поиска для передачи в апп', location);

  return (
    <div className={s.ResultsContainer}>
      {query && (
        <Route to={`/movies/${query}`}>
          <h1 className={s.Results}>Searching results:</h1>
          <ul className={s.ResultsList}>
            {searchMovie.length > 0 ? (
              searchMovie.map(result => (
                <li className={s.ResultsItem} key={result.id}>
                  <Link
                    onClick={() => updateData(location)}
                    to={{
                      pathname: `/movies/${result.id}`,
                      state: location,
                    }}
                  >
                    <p className={s.ResultsName}>{result.original_title}</p>
                    <img
                      className={s.ResultsPoster}
                      src={
                        result.poster_path
                          ? `https://image.tmdb.org/t/p/w200/${result.poster_path}`
                          : `${photo}`
                      }
                      alt={result.title}
                    />
                  </Link>
                </li>
              ))
            ) : (
              <h2 className={s.NoResults}>
                No results were found for your search
              </h2>
            )}
          </ul>
        </Route>
      )}
    </div>
  );
}
