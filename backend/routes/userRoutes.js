const express = require('express');
const { registerUser, authUser } = require('../controllers/userController');
const router = express.Router();


router.route('/').post(registerUser)    // in postman =>  http://localhost:5000/users
router.route('/login').post(authUser)   // in postman => http://localhost:5000/users/login
module.exports = router;