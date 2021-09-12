import s from './MovieDetailsPage.module.css';

import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

export default function MovieDetails(options) {
  const { url } = useRouteMatch();

  return (
    <div className={s.DetailsContainer}>
      <ul className={s.DetailsList}>
        <li className={s.Details}>
          <NavLink
            activeClassName={s.DetailsItemActive}
            className={s.DetailsItem}
            to={`${url}/cast`}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.Details}>
          <NavLink
            activeClassName={s.DetailsItemActive}
            className={s.DetailsItem}
            to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
