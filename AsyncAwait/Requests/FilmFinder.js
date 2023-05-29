require("dotenv").config();
const apiKey = process.env.API_KEY;

const tmdbbaseurl = "https://api.themoviedb.org/3/";
const playbtn = document.getElementById("playBtn");

async function getGenres() {
  const genreRequestEndpoint = "genre/movie/list";
  const requestParams = `?api_key=${apiKey}`;
  const urlToFetch = `${tmdbbaseurl}${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("this is json res", jsonResponse);
      const genres = jsonResponse.genres;
      console.log("this is a genres", genres);
      return genres;
    }
  } catch (error) {
    console.log("Caught error:", error);
  }
}

async function getMovies() {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "discover/movie";
  const requestParams = `?api_key=${apiKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbbaseurl}${discoverMovieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      console.log("movies", movies);
      return movies;
    }
  } catch (err) {
    console.log("error found", err);
  }
}

async function getMovieInfo(movie) {
  const movieId = movie.id;
  const movieEndPoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${apiKey}`;
  const urlToFetch = `${tmdbbaseurl}${movieEndPoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const movieInfo = await response.json();
      console.log(movieInfo);
      return movieInfo;
    }
  } catch (err) {
    console.log(err);
  }
}
// this is test commit
// gets a list of movies and ultimately displays the info of a random movie from the list
async function showRandomMovie() {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
  const movies = await getMovies();
  const randomMovie = await getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
}
getGenres().then(populateGenreDropdown);
playbtn.onclick = showRandomMovie;
