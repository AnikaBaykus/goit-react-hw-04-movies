import { useState } from 'react';
import { Route } from 'react-router';
import './App.css';
import HomePage from './HomePage';
import MoviesSearchForm from './MoviesSearchForm';

import Navigation from './Navigation';

function App() {
  const [movies, setMovies] = useState('');

  const handleSearchFormSubmit = data => {
    setMovies(data.trim());
  };

  return (
    <div className="App">
      <Navigation />

      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/movies">
        <MoviesSearchForm />
      </Route>
    </div>
  );
}

export default App;
