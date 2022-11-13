const express = require('express');
const dbUpdateController = require('../controller/updateController');

import { Router } from 'express';

const router: Router = express.Router();

// UPDATE
router.put('/update/all/players/sudoUpdateAllPlayers', dbUpdateController.sudoUpdateAllPlayers);
router.put('/update/all/teams/sudoUpdateAllTeams', dbUpdateController.sudoUpdateAllTeams);

module.exports = router;