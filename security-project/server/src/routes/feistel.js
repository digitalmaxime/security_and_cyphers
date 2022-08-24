const express = require('express');
const router = express.Router();

const feistelController = require('../controllers/feistel')

router.post("/", feistelController.postFeistelOrchestrator);

router.get("/", feistelController.getComputeFeistelOnNumber);

module.exports = router;
