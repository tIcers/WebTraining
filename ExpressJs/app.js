const express = require('express');
const app = express();
const { seedElements } = require('./utils');
const {updateElement, getIndexById} = require('./utils')

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const expressions = [];
seedElements(expressions, 'expressions');

app.get('/expressions', (req, res, next) => {
  res.send(expressions)
  console.log(req);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions)
  if (foundExpression){
    res.send(foundExpression)
  }else{
    res.status(404).send('Expressions are not found')
  }
}) 

app.put('/expressions/:id', (req, res, next) => {
  const idToUpdate = parseInt(req.params.id)
  const updateExpression = req.query

  const expressionIndex = getIndexById(idToUpdate, expressions)

  if(expressionIndex !== -1){
    const updateElement = updateElement(idToUpdate, updateExpression, expressionIndex)
    req.send(updateElement)
  }else{
    res.status(404).send('expression not found')
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
