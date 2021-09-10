import s from './MovieDetailsPage.module.css';
import * as APIdetailsMovieCast from '../service/api-movies';
import { useState, useEffect } from 'react';
import photo from '../../img/no_poster.jpg';

export default function MovieDetailsPageCast(options) {
  const { movieId } = options;
  console.log(movieId);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    APIdetailsMovieCast.fetchCastMovie(movieId).then(actors => {
      setActors(actors);
      console.log(actors);
    });
  }, [movieId]);

  return (
    <div className={s.PageReviews}>
      <ul className={s.ActorsList}>
        {actors.cast &&
          actors.cast.map(actors => (
            <li className={s.ActorsItem} key={actors.id}>
              <h4 className={s.ActorsTitle}>{actors.original_name}</h4>
              <img
                src={
                  actors.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actors.profile_path}`
                    : `${photo}`
                }
                alt={actors.original_name}
                width={200}
                height={300}
              />
              <p className={s.ActorsText}>{actors.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
