// express web server
const express = require('express');
const app = express();

const port = 3000;

app.use('/', require('./routes'))

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});

//mongo db
const dotenv = require("dotenv");
dotenv.config()

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.atsesns.mongodb.net/`;

const { MongoClient } = require('mongodb');

async function main() {
  const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.atsesns.mongodb.net/`;
}