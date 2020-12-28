const express = require("express");
const router = express.Router();
const homeController = require('../../../controllers/api/v1/home_controller');

router.get("/", homeController.home);
router.use('/class', require('./class'));
router.use('/teacher', require('./teacher'));
router.use('/student', require('./student'));

module.exports = router;
