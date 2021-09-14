import s from './MovieDetailsPage.module.css';

import * as APIdetailsMovie from '../service/api-movies';

import { useState, useEffect } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import { lazy, Suspense } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import MovieDetails from './MovieDetails';

const MovieDetailsPageReviews = lazy(() =>
  import('./MovieDetailsPageReviews' /* webpackChunkName: "Reviews" */),
);
const MovieDetailsPageCast = lazy(() =>
  import('./MovieDetailsPageCast' /* webpackChunkName: "Cast" */),
);

export default function MovieDetailsPage(options) {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState('');
  const { newLocation } = options;

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    APIdetailsMovie.fetchDetailsMovie(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state ?? '/');
  };

  return (
    <>
      <div className={s.Container}>
        <button type="button" className={s.Back} onClick={onGoBack}>
          &#9668; Go back
        </button>
        <div className={s.PageContainer}>
          <div className={s.PageImg}>
            <img
              className={s.PagePoster}
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className={s.PageDetails}>
            <h1 className={s.PageDetailsTitle}>{movie.title}</h1>
            <p className={s.PageDetailsText}>
              User Score: {movie.vote_average}
            </p>
            <h2 className={s.PageDetailsTitle}>Overview</h2>
            <p className={s.PageDetailsText}>{movie.overview}</p>
            <h3 className={s.PageDetailsTitle}>Genres</h3>
            <ul className={s.Genres}>
              {movie.genres &&
                movie.genres.map(genre => (
                  <li className={s.GenresItem} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <MovieDetails newLocation={newLocation}></MovieDetails>
        <Suspense fallback={<p>Загружаю...</p>}>
          <Switch>
            <Route exact path={`${url}/reviews`}>
              <MovieDetailsPageReviews
                movieId={movieId}
              ></MovieDetailsPageReviews>
            </Route>
            <Route path={`${url}/cast`}>
              <MovieDetailsPageCast movieId={movieId}></MovieDetailsPageCast>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </>
  );
}
