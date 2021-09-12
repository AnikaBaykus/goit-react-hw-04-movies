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
    `${URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`,
  );
}

export function fetchDetailsMovie(movieId) {
  return fetchWithErrorHandling(
    `${URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchCastMovie(movieId) {
  return fetchWithErrorHandling(
    `${URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchReviewsMovie(movieId) {
  return fetchWithErrorHandling(
    `${URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
