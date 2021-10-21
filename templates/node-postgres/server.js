require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const { httpLogger } = require('./logger-middlewares');
const { logger } = require('./utils');
const app = express();
const port = process.env.PORT || 3010;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const users = require('./routes/users');

app.use('/api/users', users);
app.use(httpLogger);
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

var server = app.listen(port, function() {
    logger.info(`Server listening on port ${port}`);

});
server.timeout = 120000;

function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err)
  }
}

function errorHandler (err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}
