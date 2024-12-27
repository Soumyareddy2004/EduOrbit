const express = require('express');
const router = express.Router();
const { createOrJoinGroup, getGroupDetails, addMessage } = require('../controllers/group.controller');
const { validateGroupLink } = require('../middlewares/group.middleware');

// Create or join a group
router.post('/', validateGroupLink, createOrJoinGroup);

// Fetch group details
router.get('/:groupLink', getGroupDetails);

// Add a message
router.post('/:groupLink/message', addMessage);

module.exports = router;
