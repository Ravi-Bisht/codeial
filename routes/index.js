const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');


console.log("router loaded");

router.get('/', homeController.home);

router.use('/users',require('./users'));

router.use('/posts',require('./users'));

// test 
// router.get('/about', homeController.about);



module.exports = router;