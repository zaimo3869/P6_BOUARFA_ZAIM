const express = require('express');
const router = express.Router();
const lim = require("../middleware/limite")
const userCtrl = require('../controllers/users');

router.post('/signup', userCtrl.signup);
router.post('/login', lim.limiter,userCtrl.login);

module.exports = router;