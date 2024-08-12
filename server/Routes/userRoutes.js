// const express = require('express');
// const router = express.Router();
// const { createUser } = require('../Controllers/userController');

// // Route for creating a new user
// router.post('/users', createUser);

// // Other user-related routes

// module.exports = router;

//test
// const express = require('express');
// const router = express.Router();
// const { createUser } = require('../Controllers/userController');

// // Route for creating a new user
// router.post('/users', createUser);

// // Other user-related routes can be added here

// module.exports = router;
const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();

router.post('/register', userController.register);

// يمكن إضافة مسارات أخرى مثل login, profile, إلخ.

module.exports = router;
