import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.Navigation}>
      <NavLink
        exact
        className={s.NavigationLink}
        activeClassName={s.NavigationLinkActive}
        to="/"
      >
        HomePage
      </NavLink>
      <NavLink
        className={s.NavigationLink}
        activeClassName={s.NavigationLinkActive}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
