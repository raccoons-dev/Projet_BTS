const express = require('express');

const app = express();

// Requete GET
app.get('/', (req, res) => {
    res.send('Hello Manuel');
});

app.listen(5500, (req, res) => console.log('Server ok !'));