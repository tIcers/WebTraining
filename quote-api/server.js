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

app.post('/quotes', (req, res, next) => {
  const {quote, person} = req.query 

  if(!quotes || !person){
    res.status(404).send("Both quote and person are requried in the query")
  }else{
    const newQuotes = {
      quote:quote, 
      person:person
    }
    quotes.push(newQuotes)
    res.status(201).send(newQuotes)
  }
})

app.listen(PORT, (req, res, next )=> {
  console.log(`${PORT} is listening..`)
})

