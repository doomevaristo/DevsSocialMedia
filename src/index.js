const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://marcos:199465789Ab!@cluster0-mtaxd.mongodb.net/devsocialmedia?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
