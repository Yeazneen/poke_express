//Import dependencies
const express = require('express');
const app = express();
const PORT = 3000;

//Import pokemon model
const pokemon = require('./models/pokemon.jsx');

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})
app.listen(PORT, () => {
    console.log('listening')
})