require("dotenv").config();
const apiKey = process.env.API_KEY;

const tmdbbaseurl = "https://api.themoviedb.org/3/";
const playbtn = document.getelementbyid("playbtn");

async const getgenres = () => {
  const options = {
    method: "get",
    headers: {
      accept: "application/json",
      authorization:
        "bearer eyjhbgcioijiuzi1nij9.eyjhdwqioiiymgiynzuynmizmtjjmtmyyme2oge0zgninjmxoduwysisinn1yii6ijyymjdjyzk1mtezmgjkmda2n2mzzwvjmiisinnjb3blcyi6wyjhcglfcmvhzcjdlcj2zxjzaw9uijoxfq.wxuizie4e5feuqayvl-ywso-b0njtckk3xmuruxs6nw",
    },
  };
  const requestparams = `?apikey=tmdbkey`;
  const urltofetch = `${tmdbbaseurl}${genrerequestendpoint}${requestparams}`
  console.log(urltofetch)

  try {
    const response = await fetch(urltofetch)
    if(response.ok){
      const jsonResponse = response.json 
      console.log(jsonResponse)
    }
  } catch (error) {
    
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

getgenres().then(populategenredropdown);
playbtn.onclick = showrandommovie;
