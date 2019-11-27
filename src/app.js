// library and controller initiazation
import express from 'express';
import logger from 'morgan';

import routes from './rest/routes';
import './oauth';

const app = express();

// for parsing request body content
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

// api routes
app.use('/api/v1', routes);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Page or route does not exist',
  });
});

module.exports = app;
