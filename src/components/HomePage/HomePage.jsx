import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as APIpopularMovies from '../service/api-movies';
import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    APIpopularMovies.fetchPopularMovies()
      .then(movies => setMovies(movies.results))
      .catch(error => error);
  }, []);

  console.log(movies);

  return (
    <div className={s.HomePage}>
      <h1 className={s.HomePageTitle}>Trending today</h1>
      <ul className={s.MoviesList}>
        {movies &&
          movies.map(movie => (
            <li className={s.MoviesItem} key={movie.id}>
              <Link>
                <h2 className={s.MoviesItemTitle}>{movie.title}</h2>

                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
