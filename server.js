'use strict';

const express = require('express');
const config = require('./config');

const PORT = config.PORT;
const HOST = config.HOST;
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);