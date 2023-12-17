import Koa from 'koa';
import bodyParser from 'koa-bodyparser'; // Changed the import statement
import transactions from './transactions.js';

const app = new Koa(); // Fixed the instantiation of Koa

// Set up body parsing middleware
app.use(bodyParser());

// Use the Router on the sub route /movies
app.use(transactions.routes());
app.use(transactions.allowedMethods());

var port = normalizePort(process.env.PORT || '3000');

app.listen(port, () => {
  console.log('Server running on http://localhost:3000');
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}