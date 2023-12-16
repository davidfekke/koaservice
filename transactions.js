import Router from 'koa-router';

const router = new Router({ // Changed to new Router()
    prefix: '/transactions'
});

const transactions = [
    {id: 101, merchant: "Home Depot", description: '2x4s', date: '2023-12-15T11:15:00Z', price: 8.10},
    {id: 102, merchant: "Lows", description: 'Washer', date: '2023-12-15T10:45:00Z', price: 819.75},
    {id: 103, merchant: "Gamestop", description: 'Lego Batman', date: '2023-12-15T09:23:00Z', price: 69.99},
    {id: 104, merchant: "Apple", description: 'iPad', date: '2023-12-15T08:21:00Z', price: 499.99}
];

// Routes
router.get('/', async (ctx) => {
    ctx.body = transactions;
});

// Add more routes for POST, PUT, DELETE, etc.

export default router;
