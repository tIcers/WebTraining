require("dotenv").config();
const apiKey = process.env.API_KEY;

const tmdbbaseurl = "https://api.themoviedb.org/3/";
const playbtn = document.getelementbyid("playbtn");

async function getgenres() {
  const genreRequestEndpoint = "genre/movie/list";
  const requestparams = `?apikey=${tmdbkey}`;
  const urlToFetch= `${tmdbbaseurl}${genreRequestEndpoint}${requestparams}`;
  try {
    const response = await fetch(urltofetch);
    if (response.ok) {
      const jsonResponse = response.json();
      console.log(jsonResponse);
      const genres = jsonResponse.genres;
      console.log(genres);
      return genres;
    }
  } catch (error) {
    console.log("Caught error:", error);
  }
}

async function getmovies() {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "discover/movie";
  const requestparams = `?apikey=${tmdbkey}&with_genres=${selectedGenre}`;
  const urlToFetch= `${tmdbbaseurl}${discoverMovieEndpoint}?${requestparams}`;
  try{
    const response = await fetch(urlToFetch)
    if(response.ok){
      jsonResponse = response.json()
      console.log(jsonResponse)
      getMovies()
    }
  }
};

const getmovieinfo = () => {};

// gets a list of movies and ultimately displays the info of a random movie from the list
const showrandommovie = () => {
  const movieinfo = document.getelementbyid("movieinfo");
  if (movieinfo.childnodes.length > 0) {
    clearcurrentmovie();
  }
};
getgenres().then(populategenredropdown);
playbtn.onclick = showrandommovie;
