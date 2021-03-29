'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('../src/middleware/logger');
const validator = require('./middleware/validator');
const app = express();


app.use(express.json());
app.use(logger);


app.get('/person',validator,handelPerson);


app.get('/', (req, res) => {
    res.send('Hello World');
  });
  
  app.get('/bad', (req, res) => {
    throw new Error('something went wrong');
  });


function handelPerson(req, res) {
    const output = {
              name: req.query.name,
            };
            res.json(output);
}



app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: (port) => {
    const PORT = port || 5000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};