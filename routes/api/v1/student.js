const express = require('express');
const router = express.Router();
const studentController = require('../../../controllers/api/v1/student_controller');


// router.post("/create", studentController.create);
router.post("/create-session", studentController.createSession);

module.exports = router;

