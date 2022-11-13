const express = require('express');
const linkController = require('../controller/linkController');

import { Router } from 'express';

const router: Router = express.Router();

// GET
router.get('/', linkController.getAllLinks);    
router.get('/:id', linkController.getLinkById);

// POST
router.post('/', linkController.createLink);

// PUT
router.put('/:id', linkController.updateLink);

// DELETE
router.delete('/:id', linkController.deleteLink);

module.exports = router;