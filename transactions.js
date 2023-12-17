import Router from 'koa-router';

const router = new Router({ // Changed to new Router()
    prefix: '/transactions'
});

const transactions = [
    {id: 101, merchant: "Home Depot", description: '2x4s', date: '2023-12-15T11:15:00Z', price: 8.10},
    {id: 102, merchant: "Lows", description: 'Washer', date: '2023-12-15T10:45:00Z', price: 819.75},
    {id: 103, merchant: "Gamestop", description: 'Lego Batman', date: '2023-12-15T09:23:00Z', price: 69.99},
    {id: 104, merchant: "Apple", description: 'iPad', date: '2023-12-15T08:21:00Z', price: 499.99},
    {id: 105, merchant: "Ford", description: '2024 Bronco Sport', date: '2023-12-16T08:25:00Z', price: 41000.99},
    {
        "id": 106,
        "merchant": "Amazon",
        "description": "Smart Speaker",
        "date": "2023-12-16T15:30:00Z",
        "price": 79.99
    },
    {
        "id": 107,
        "merchant": "Best Buy",
        "description": "4K TV",
        "date": "2023-12-16T14:15:00Z",
        "price": 899.99
    },
    {
        "id": 108,
        "merchant": "Target",
        "description": "Winter Jacket",
        "date": "2023-12-16T13:10:00Z",
        "price": 59.95
    },
    {
        "id": 109,
        "merchant": "Starbucks",
        "description": "Caramel Latte",
        "date": "2023-12-16T09:45:00Z",
        "price": 4.75
    },
    {
        "id": 110,
        "merchant": "Walmart",
        "description": "Groceries",
        "date": "2023-12-16T17:20:00Z",
        "price": 75.25
    },
    {
        "id": 111,
        "merchant": "Nike",
        "description": "Running Shoes",
        "date": "2023-12-17T11:30:00Z",
        "price": 129.99
    },
    {
        "id": 112,
        "merchant": "PetSmart",
        "description": "Dog Food",
        "date": "2023-12-17T10:05:00Z",
        "price": 29.95
    },
    {
        "id": 113,
        "merchant": "Costco",
        "description": "Bulk Toilet Paper",
        "date": "2023-12-17T09:15:00Z",
        "price": 19.99
    },
    {
        "id": 114,
        "merchant": "McDonald's",
        "description": "Big Mac Combo",
        "date": "2023-12-17T12:55:00Z",
        "price": 7.49
    },
    {
        "id": 115,
        "merchant": "Uber",
        "description": "Ride to Airport",
        "date": "2023-12-17T08:40:00Z",
        "price": 25.50
    }      
];

// Routes
router.get('/', async (ctx) => {
    ctx.body = transactions;
});

// Add more routes for POST, PUT, DELETE, etc.

export default router;
