// import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import MoviesSearchForm from './MoviesSearchForm';
import Navigation from './Navigation';
import NotFound from './NotFound';

function App(options) {
  // const [movies, setMovies] = useState('');
  // console.log(movies);

  // const handleSearchFormSubmit = data => {
  //   setMovies(data.trim());
  // };

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
          <MoviesPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
