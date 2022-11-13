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

// routes
app.use('/v1/api/players', require('./routes/playerRoutes'));
app.use('/v1/api/teams', require('./routes/teamRoutes'));
app.use('/v1/api/links', require('./routes/linkRoutes'));
app.use('/api/dbUpdate', require('./routes/dbUpdate'));

// starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});