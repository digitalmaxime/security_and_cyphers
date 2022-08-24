const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts-obsolete.js')

router.get("/", postsController.getPosts);

router.post('/', postsController.postPosts);

module.exports = router;
