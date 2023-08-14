const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');
const setupSwagger = require('./helpers/swagger');
const app = express();

dbConnection();

setupSwagger(app);

app.use(cors())

app.use(express.static('public'));

app.use(express.json());

app.use('/api/character', require('./routes/characters'));


// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});






