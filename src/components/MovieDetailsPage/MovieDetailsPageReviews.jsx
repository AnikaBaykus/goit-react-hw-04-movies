import s from './MovieDetailsPage.module.css';

import * as APIdetailsMovieReviews from '../service/api-movies';

import { useState, useEffect } from 'react';

export default function MovieDetailsPageReviews(options) {
  const { movieId } = options;

  const [reviews, setReviews] = useState('');

  useEffect(() => {
    APIdetailsMovieReviews.fetchReviewsMovie(movieId).then(reviews => {
      setReviews(reviews);
    });
  }, [movieId]);

  return (
    <div className={s.PageReviews}>
      <ul>
        {reviews.total_results !== 0 ? (
          reviews.results &&
          reviews.results.map(result => (
            <li className={s.DetailsReviews} key={result.id}>
              <h4 className={s.ReviewsTitle}>{result.author}</h4>
              <p className={s.ReviewsText}> {result.content}</p>
            </li>
          ))
        ) : (
          <h4>No reviews</h4>
        )}
      </ul>
    </div>
  );
}
