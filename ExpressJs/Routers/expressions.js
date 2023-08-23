
const express = require('express');
const { seedElements } = require('./utils');

const expressionsRouter = express()

const expressions = [];
seedElements(expressions, 'expressions');

expressionsRouter.get('/', (req, res, next) => {
  res.send(expressions);
});
module.exports = expressionsRouter
