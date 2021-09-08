const API_KEY = 'bb99cf0123948bcb57616045b789da85';
const URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies() {
  return fetchWithErrorHandling(`${URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchSearchMovies(query) {
  return fetchWithErrorHandling(
    `${URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  );
}

export function fetchDetailsMovie(movieID) {
  return fetchWithErrorHandling(
    `${URL}/movie/${movieID}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchCastMovie(movieID) {
  return fetchWithErrorHandling(
    `${URL}/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchReviewsMovie(movieID) {
  return fetchWithErrorHandling(
    `${URL}/movie/${movieID}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
