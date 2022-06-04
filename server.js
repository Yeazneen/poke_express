//Import dependencies
const express = require('express');
const app = express();
const PORT = 3000;

//Import pokemon model
const pokemons = require('./models/pokemon.jsx');
const reactViews = require('express-react-views');
const createEngine = reactViews.createEngine;
const renderFile = createEngine();

app.set('view engine', 'jsx');
app.engine('jsx', renderFile);

//Middlewire
app.set('view engine', 'jsx');
app.engine('jsx', renderFile);

//Pokemon Index
app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemons })
})

//Port
app.listen(PORT, () => {
    console.log('listening')
})