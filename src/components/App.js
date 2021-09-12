import { Route, Switch } from 'react-router';
import { lazy, Suspense } from 'react';
import './App.css';
// import HomePage from './HomePage';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './MoviesPage';
import Navigation from './Navigation';
// import NotFound from './NotFound';

const HomePage = lazy(() =>
  import('./HomePage/HomePage.jsx' /* webpackChunkName: "Home_Page" */),
);
const MoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage.jsx' /* webpackChunkName: "Movies_Page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "Movies_Page_Details" */
  ),
);
const NotFound = lazy(() =>
  import('./NotFound/NotFound.jsx' /* webpackChunkName: "Not_Found" */),
);

function App(options) {
  return (
    <div className="App">
      <Navigation />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
