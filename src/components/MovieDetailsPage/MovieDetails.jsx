import s from './MovieDetailsPage.module.css';

import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

export default function MovieDetails(options) {
  const { url } = useRouteMatch();
  const { newLocation } = options;
  const { search } = options.newLocation;

  return (
    <div className={s.DetailsContainer}>
      <ul className={s.DetailsList}>
        <li className={s.Details}>
          <NavLink
            activeClassName={s.DetailsItemActive}
            className={s.DetailsItem}
            to={{
              pathname: `${url}/cast`,
              state: {
                search: newLocation && search ? search : '',
                from: newLocation,
              },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.Details}>
          <NavLink
            activeClassName={s.DetailsItemActive}
            className={s.DetailsItem}
            to={{
              pathname: `${url}/reviews`,
              state: {
                search: newLocation && search ? search : '',
                from: newLocation,
              },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
