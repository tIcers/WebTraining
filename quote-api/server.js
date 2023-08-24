const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/quotes/random', (req, res, next) => {
  const chosenQuote = getRandomElement(quotes)
  res.send(chosenQuote['quote'])
})

app.get('/quotes', (req, res, next) => {
  const person = req.query.person

  if(!person){
    res.send(quotes)
  }else{
    const personQuotes = quotes.filter(quotes => quotes.person === person)
    res.send(personQuotes)
  }
})



app.listen(PORT, (req, res, next )=> {
  console.log(`${PORT} is listening..`)
})

