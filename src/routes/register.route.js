const express = require('express');
const router = express.Router();
const { register } = require('../controllers/user.controller');
const { validateData } = require('../middleware/validateData.mid');
const { userSchema } = require('../models/user.schema');

router.post('/users', validateData(userSchema, 'body'), register);

module.exports = router;