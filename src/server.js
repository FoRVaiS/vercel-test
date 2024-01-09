const express = require('express');

function createServer(port, address) {
  const app = express();

  app.get('/healthz', (req, res) => {
    res.send('OK');
  });

  app.listen(port, address, () => {
    console.log('Hello World!');
  });

  return app;
}

module.exports = {
  createServer
}
