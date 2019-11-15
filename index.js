'use strict';

const express = require('express');
const connection = require('./model/db.js');

const app = express();

app.use(express.static('public'));

app.get('/animal', async (req, res) => {
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM animal');
    console.log(results); // results contains rows r
    console.log(fields); // fields contains extra m
    res.json(results);
  } catch (e) {
    console.log(e);
    res.send('db error :(');
  }
});

app.get('/', (req, res) => {
  res.send('Hello form my Node server');
});

app.get('/demo', (req, res) => {
  console.log('request', req);
  res.send('demo');
});

app.listen(3000, () => {
  console.log('server app start?');
});
