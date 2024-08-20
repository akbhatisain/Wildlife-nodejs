const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to get random wildlife information
app.get('/api/animal', async (req, res) => {
    try {
        const response = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand');
        console.log('API response:', response.data); // Log the response for debugging
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching wildlife information:', error); // Log the error
        res.status(500).json({ error: 'Failed to fetch wildlife information' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
