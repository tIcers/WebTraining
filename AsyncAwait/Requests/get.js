// Information to reach API
// const apiKey = 'e39c21be9925499b9529ff86b862a7f2'
const url = "https://api.datamuse.com/words?sl=";

// Selects page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + wordQuery;
  fetch(endpoint, { cache: "no-cache" }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed!");
    },
    (networkError) => {
      console.log(networkError.message);
    }.then(jsonResponse => {
        // renderRawResponce(jsonResponse) 
        renderResponce(jsonResponse)
      })
  );
};

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);
