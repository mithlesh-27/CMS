const express = require('express');
const { createContent, getContent } = require('../controllers/contentController');
const { auth } = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createContent);
router.get('/', getContent);

module.exports = router;
