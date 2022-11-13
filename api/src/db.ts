const Pool= require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.CONNECTION_URL,
    password: process.env.PASSWORD,
    ssl: true
});

module.exports = pool;

/*
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

import { Express } from 'express';

// importing environment variables
require('dotenv').config();

console.log(process.env.CONNECTION_URL);

var pg = require('pg');
var client = new pg.Client(process.env.CONNECTION_URL);

client.connect(function(err: any) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err: any, result: any) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
  });

});

export default client;
*/