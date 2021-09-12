import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as APIpopularMovies from '../service/api-movies';

import s from './HomePage.module.css';
import photo from '../../img/no_poster.jpg';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    APIpopularMovies.fetchPopularMovies()
      .then(movies => setMovies(movies.results))
      .catch(error => error);
  }, []);

  return (
    <div className={s.HomePage}>
      <h1 className={s.HomePageTitle}>Trending today</h1>
      <ul className={s.MoviesList}>
        {movies &&
          movies.map(movie => (
            <li className={s.MoviesItem} key={movie.id}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                <h2 className={s.MoviesItemTitle}>{movie.title}</h2>

                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                      : `${photo}`
                  }
                  alt={movie.title}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
