const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

import { Express } from 'express';

// importing environment variables
require('dotenv').config();

// initialization
const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '3000');

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});