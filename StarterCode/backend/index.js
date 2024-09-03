
const express = require('express');
require('dotenv').config();
const cors = require('cors');  // import cors


const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());

//implement the CORS config
app.use(cors());  // Enable CORS for all routes

//products array
let products = [
    { id: 1, name: 'Product 1', description: 'description 1', price: 100, imageUrl: '/logo192.png' },
    { id: 2, name: 'Product 2', description: 'description 2', price: 200, imageUrl: '/logo192.png' },
    { id: 3, name: 'Product 3', description: 'description 3', price: 300, imageUrl: '/logo192.png' },
    { id: 4, name: 'Product 4', description: 'description 4', price: 150, imageUrl: '/logo192.png' },
    { id: 5, name: 'Product 5', description: 'description 5', price: 500, imageUrl: '/logo192.png' },
    { id: 6, name: 'Product 6', description: 'description 6', price: 50, imageUrl: '/logo192.png' },
];

//function to generate a url for getting a random image from picsum
const fetchImageUrl = () => {
    return `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
};

//implement the get api for getting products
app.get('/api/products', (req, res) => {
    res.json(products);
});

//implement the delete api for deleting a product by Id
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(product => product.id == id);

    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        res.json({ message: 'Product deleted successfully' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
