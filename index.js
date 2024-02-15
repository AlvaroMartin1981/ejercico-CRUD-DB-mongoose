const express = require('express');
const mongoose = require('mongoose')
const app =  express();
const PORT = 4004
const {dbConnection} = require('./config/config');
const routes = require('./routes/tasks');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

dbConnection();

app.listen(PORT, () => {
    console.log(`Express esta escuchando en http://localhost:${PORT}`)
})