const express = require('express');
const { resolve } = require('path');
require('dotenv').config();
const mongoose =require('mongoose');

const app = express();
const port = 3010;

const MONGO_URI=process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(()=>console.log('Connected to database'))
.catch((err)=>console.log('error connecting to database:',err));

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
