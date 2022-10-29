const express = require('express');
const playerController = require('../controller/playerController');

import { Router } from 'express';

const router: Router = express.Router();

// GET
router.get('/', playerController.getAllPlayers);
router.get('/:id', playerController.getPlayerById);
router.get('/team/:id', playerController.getPlayersByTeam);

// POST
router.post('/', playerController.createPlayer);

// PUT
router.put('/:id', playerController.updatePlayer);

// DELETE
router.delete('/:id', playerController.deletePlayer);
router.delete('/delete/all/players/sudoDeleteAllPlayers', playerController.deleteAllPlayers);

module.exports = router;
