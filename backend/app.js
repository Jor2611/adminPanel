const express = require('express');
const path = require('path');
const router = require('./routers');

const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());



module.exports = app;