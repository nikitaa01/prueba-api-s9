const express = require('express');
const router = express.Router();
const { register, list } = require('../controllers/user.controller');
const { validateData } = require('../middleware/validateData.mid');
const { userSchema } = require('../models/user.schema');

router.post('/users', validateData(userSchema, 'body'), register);
router.get('/users', validateData(userSchema, 'body'), list);

module.exports = router;