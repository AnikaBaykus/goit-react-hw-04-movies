import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './HomePage';
import MovieDetailsPage from './MovieDetailsPage';
import MoviesSearchForm from './MoviesSearchForm';
import Navigation from './Navigation';
import NotFound from './NotFound';

function App(options) {
  const [movies, setMovies] = useState('');

  const handleSearchFormSubmit = data => {
    setMovies(data.trim());
  };

  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <MoviesSearchForm />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
