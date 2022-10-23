const Pool= require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.CONNECTION_URL,
    password: process.env.PASSWORD,
    ssl: true
});

module.exports = pool;