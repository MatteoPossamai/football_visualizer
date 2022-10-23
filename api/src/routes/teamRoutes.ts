const express = require('express');
const teamsController = require('../controller/teamController');

import { Router } from 'express';

const router: Router = express.Router();

// GET
router.get('/', teamsController.getAllTeams);
router.get('/:id', teamsController.getTeamById);

// POST
router.post('/', teamsController.createTeam);

// PUT
router.put('/:id', teamsController.updateTeam);

// DELETE
router.delete('/:id', teamsController.deleteTeam);
router.delete('/', teamsController.deleteAllTeams);

module.exports = router;
