// const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection Open');
  })
  .on('error', (err) => {
    console.log(`connection error: ${err.message}`);
  });
require('./models/Registration');
const app = require('./app');
const server = app.listen(3000, function () {
  console.log(`Express is running on post ${server.address().port}`);
});