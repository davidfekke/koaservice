import Koa from 'koa';
import bodyParser from 'koa-bodyparser'; // Changed the import statement
import transactions from './transactions.js';

const app = new Koa(); // Fixed the instantiation of Koa

// Set up body parsing middleware
app.use(bodyParser());

// Use the Router on the sub route /movies
app.use(transactions.routes());
app.use(transactions.allowedMethods());

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
