// @ts-check
const express = require('express');

function createServer(port, address) {
  const app = express();

  const v1Router = express.Router();

  // Prefix all routes to v1Router with '/api/v1'.
  app.use('/api/v1', v1Router);

  // Use v1Router to handle all routes
  v1Router.get('/healthz', (req, res) => {
    res.send('OK');
  });

  v1Router.get('/greet', (req, res) => {
    const { name } = req.query;
    res.send({ msg: `Welcome ${name}!` });
  })

  // Listen on the specified port and address.
  app.listen(port, address, () => {
    console.log('Hello World!');
  });

  return app;
}

module.exports = {
  createServer
}
