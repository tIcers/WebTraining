require("dotenv").config();
const apiKey = process.env.API_KEY;

const tmdbbaseurl = "https://api.themoviedb.org/3/";
const playbtn = document.getelementbyid("playbtn");

async function getgenres() {
  const genreRequestEndpoint = "genre/movie/list";
  const requestparams = `?apikey=${tmdbkey}`;
  const urltofetch = `${tmdbbaseurl}${genrerequestendpoint}${requestparams}`;
  console.log(urltofetch);

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
const getmovies = () => {
  const selectedgenre = getselectedgenre();
};

const getmovieinfo = () => {};

// gets a list of movies and ultimately displays the info of a random movie from the list
const showrandommovie = () => {
  const movieinfo = document.getelementbyid("movieinfo");
  if (movieinfo.childnodes.length > 0) {
    clearcurrentmovie();
  }
};
kj;
getgenres().then(populategenredropdown);
playbtn.onclick = showrandommovie;
