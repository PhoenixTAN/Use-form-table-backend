const express = require('express');

const recordController = require('../controllers/record');

const router = express.Router();

// GET /feed/posts
router.get('/posts', recordController.getPosts);

// POST /feed/post
router.post('/post', recordController.createPost);

module.exports = router;