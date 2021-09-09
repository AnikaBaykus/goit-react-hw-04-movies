import s from './MovieDetailsPage.module.css';
import * as APIdetailsMovie from '../service/api-movies';
import { useState, useEffect } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function MovieDetailsPage(options) {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  console.log(movieId);

  const [movie, setMovie] = useState('');
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    APIdetailsMovie.fetchDetailsMovie(movieId).then(movie => {
      setMovie(movie);
      console.log(movie);
    });
  }, [movieId]);

  useEffect(() => {
    APIdetailsMovie.fetchCastMovie(movieId).then(actors => {
      setActors(actors);
      console.log(actors);
    });
  }, [movieId]);

  useEffect(() => {
    APIdetailsMovie.fetchReviewsMovie(movieId).then(reviews => {
      setReviews(reviews);
      console.log(reviews);
    });
  }, [movieId]);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <h1>{movie.title}</h1>
        <p>User Score: {movie.vote_average}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Geners</h3>
        <ul>
          {movie.genres &&
            movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
      <hr />
      <div>
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>
              Reviews
              <p></p>
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <Switch>
        <Route exact path={`${url}/reviews`}>
          <div>
            <ul>
              {reviews.results &&
                reviews.results.map(result => (
                  <li key={result.id}>
                    <h4>{result.author}</h4>

                    <p>{result.content}</p>
                  </li>
                ))}
            </ul>
          </div>
        </Route>
        <Route path={`${url}/cast`}>
          <div>
            <ul>
              {actors.cast &&
                actors.cast.map(actors => (
                  <li key={actors.id}>
                    <p>{actors.original_name}</p>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${actors.profile_path}`}
                      alt={actors.original_name}
                    />
                    <p>{actors.character}</p>
                  </li>
                ))}
            </ul>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
