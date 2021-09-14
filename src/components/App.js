import { Route, Switch } from 'react-router';
import { lazy, Suspense, useState } from 'react';
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
  const [newLocation, setNewLocation] = useState({});
  // console.log(newLocation, 'в App');
  const updateData = location => {
    setNewLocation(location);
  };
  // console.log('локацию которую получили в Апп', newLocation);
  return (
    <div className="App">
      <Navigation />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/">
            <HomePage updateData={updateData} />
          </Route>
          <Route exact path="/movies">
            <MoviesPage updateData={updateData} />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage newLocation={newLocation} />
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
