const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Allow CORS from your frontend domain
app.use(cors({
    origin: 'https://sylphx.site', // Replace with your frontend domain
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json()); // Ensure body parser middleware is applied to parse JSON

// Simple GET route for the root to avoid "Cannot GET" error
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Example route to verify the key
app.post('/verify-key', (req, res) => {
    try {
        const { ip, key } = req.body;

        // Check if both IP and key are present
        if (!ip || !key) {
            return res.status(400).json({ success: false, message: 'IP and key are required' });
        }

        console.log('Received IP:', ip);
        console.log('Received Key:', key);

        // Example validation logic
        const validKeyPrefix = 'sylphx1day-'; // Prefix used by valid keys
        const keyRegex = /^sylphx1day-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}$/; // Updated regex

        const isValidKey = keyRegex.test(key) && key.startsWith(validKeyPrefix);

        if (isValidKey) {
            res.json({ success: true });
        } else {
            res.json({ success: false, message: 'Invalid key format or prefix' });
        }
    } catch (error) {
        console.error('Error parsing request:', error);
        res.status(400).json({ success: false, message: 'Invalid request' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
