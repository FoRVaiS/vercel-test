const server = require('./server.js');
app = server.createServer(3000, '0.0.0.0');

module.exports = app;
