// // const pool = require('../Config/db');

// // // Create a new user
// // const createUser = (req, res) => {
// //   const { username, email, password } = req.body;

// //   pool.query(
// //     'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
// //     [username, email, password],
// //     (error, results) => {
// //       if (error) {
// //         throw error;
// //       }
// //       res.status(201).json(results.rows[0]);
// //     }
// //   );
// // };

// // // Other user-related controllers (login, get user info, etc.)

// // module.exports = {
// //   createUser,
// //   // Add other exported functions here
// // };


// const pool = require('../Config/db');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// // Create a new user
// const createUser = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Hash the password before storing it
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     // Insert user into the database
//     const result = await pool.query(
//       'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
//       [username, email, hashedPassword]
//     );

//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'An error occurred while creating the user.' });
//   }
// };

// // Other user-related controllers (login, get user info, etc.)

// module.exports = {
//   createUser,
//   // Add other exported functions here
// };
//test

// const bcrypt = require('bcrypt');
// const userModel = require('../Models/userModel'); // Adjust the path as needed

// const createUser = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the user with the hashed password
//     const newUser = await userModel.createUser(username, email, hashedPassword);
    
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error('Error creating user:', error); // Log detailed error
//     res.status(500).json({ error: 'An error occurred while creating the user.' });
//   }
// };

// module.exports = {
//   createUser,
//   // Other functions
// };
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');

const userController = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.json({ user });
  },
  
  // يمكن إضافة دوال مثل login, profile, إلخ.
};

module.exports = userController;
