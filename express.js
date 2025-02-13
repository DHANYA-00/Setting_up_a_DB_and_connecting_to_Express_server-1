const express = require('express');
const mongoose =require('mongoose');

require('dotenv').config();


const MONGO_URI=process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(()=>console.log('Connected to database'))
.catch((err)=>console.log('error connecting to database:',err));
