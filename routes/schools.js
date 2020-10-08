const express = require('express');
const router = express.Router();

const schoolController = require('../controllers/schools');

/* GET schools listing. */
router.get('/', schoolController.getList);

module.exports = router;
