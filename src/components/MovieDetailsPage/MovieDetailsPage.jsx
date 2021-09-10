import s from './MovieDetailsPage.module.css';
import * as APIdetailsMovie from '../service/api-movies';
import { useState, useEffect } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import MovieDetails from './MovieDetails';
import MovieDetailsPageReviews from './MovieDetailsPageReviews';
import MovieDetailsPageCast from './MovieDetailsPageCast';

export default function MovieDetailsPage(options) {
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  const [movie, setMovie] = useState('');

  useEffect(() => {
    APIdetailsMovie.fetchDetailsMovie(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  return (
    <>
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
          <p className={s.PageDetailsText}>User Score: {movie.vote_average}</p>
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

      <MovieDetails></MovieDetails>

      <Switch>
        <Route exact path={`${url}/reviews`}>
          <MovieDetailsPageReviews movieId={movieId}></MovieDetailsPageReviews>
        </Route>
        <Route path={`${url}/cast`}>
          <MovieDetailsPageCast movieId={movieId}></MovieDetailsPageCast>
        </Route>
      </Switch>
    </>
  );
}
