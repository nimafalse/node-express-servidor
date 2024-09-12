const express = require('express');
const path = require('path');

const App = express();

App.get ("/", (req, res) => {
    //res.send('Hola, mundo!');
    res.sendFile(path.join(__dirname + "/index.html"));
});

App.listen(3000, () => {
    console.log('El servidor se inicia en el puerto', 3000);
});