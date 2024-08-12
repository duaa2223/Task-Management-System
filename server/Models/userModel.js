// // // // Models/user.js

// // // const { Pool } = require('pg');
// // // require('dotenv').config({ path: 'config.env' });

// // // // Create a new pool instance for connecting to the database
// // // const pool = new Pool({
// // //   user: "postgres",
// // //   host: "localhost",
// // //   database: "task_management",
// // //   password: "duaa123321",
// // //   port: 5432
// // // });

// // // // Function to create a new user
// // // const createUser = async (username, email, password) => {
// // //   const query = `
// // //     INSERT INTO users (username, email, password)
// // //     VALUES ($1, $2, $3)
// // //     RETURNING *;
// // //   `;
// // //   const values = [username, email, password];

// // //   try {
// // //     const result = await pool.query(query, values);
// // //     return result.rows[0];
// // //   } catch (err) {
// // //     console.error('Error creating user:', err);
// // //     throw err;
// // //   }
// // // };

// // // // Function to get a user by ID
// // // const getUserById = async (id) => {
// // //   const query = `
// // //     SELECT * FROM users
// // //     WHERE id = $1;
// // //   `;
// // //   const values = [id];

// // //   try {
// // //     const result = await pool.query(query, values);
// // //     return result.rows[0];
// // //   } catch (err) {
// // //     console.error('Error getting user by ID:', err);
// // //     throw err;
// // //   }
// // // };

// // // // Function to get all users
// // // const getAllUsers = async () => {
// // //   const query = `
// // //     SELECT * FROM users;
// // //   `;

// // //   try {
// // //     const result = await pool.query(query);
// // //     return result.rows;
// // //   } catch (err) {
// // //     console.error('Error getting all users:', err);
// // //     throw err;
// // //   }
// // // };

// // // // Function to update a user by ID
// // // const updateUserById = async (id, username, email, password) => {
// // //   const query = `
// // //     UPDATE users
// // //     SET username = $1, email = $2, password = $3
// // //     WHERE id = $4
// // //     RETURNING *;
// // //   `;
// // //   const values = [username, email, password, id];

// // //   try {
// // //     const result = await pool.query(query, values);
// // //     return result.rows[0];
// // //   } catch (err) {
// // //     console.error('Error updating user:', err);
// // //     throw err;
// // //   }
// // // };

// // // // Function to delete a user by ID
// // // const deleteUserById = async (id) => {
// // //   const query = `
// // //     DELETE FROM users
// // //     WHERE id = $1;
// // //   `;
// // //   const values = [id];

// // //   try {
// // //     await pool.query(query, values);
// // //     return `User with ID ${id} deleted successfully`;
// // //   } catch (err) {
// // //     console.error('Error deleting user:', err);
// // //     throw err;
// // //   }
// // // };

// // // module.exports = {
// // //   createUser,
// // //   getUserById,
// // //   getAllUsers,
// // //   updateUserById,
// // //   deleteUserById,
// // // };


// // const { Pool } = require('pg');
// // const bcrypt = require('bcrypt');
// // require('dotenv').config({ path: 'config.env' });

// // const pool = new Pool({
// //   user: process.env.DB_USER || "postgres",
// //   host: process.env.DB_HOST || "localhost",
// //   database: process.env.DB_NAME || "task_management",
// //   password: process.env.DB_PASSWORD || "duaa123321",
// //   port: process.env.DB_PORT || 5432,
// // });

// // // Function to create a new user
// // const createUser = async (username, email, password) => {
// //   const hashedPassword = await bcrypt.hash(password, 10);
// //   const query = `
// //     INSERT INTO users (username, email, password)
// //     VALUES ($1, $2, $3)
// //     RETURNING *;
// //   `;
// //   const values = [username, email, hashedPassword];

// //   try {
// //     const result = await pool.query(query, values);
// //     return result.rows[0];
// //   } catch (err) {
// //     console.error('Error creating user:', err.message);
// //     throw err;
// //   }
// // };

// // // Function to get a user by ID
// // const getUserById = async (id) => {
// //   const query = `
// //     SELECT * FROM users
// //     WHERE id = $1;
// //   `;
// //   const values = [id];

// //   try {
// //     const result = await pool.query(query, values);
// //     return result.rows[0];
// //   } catch (err) {
// //     console.error('Error getting user by ID:', err.message);
// //     throw err;
// //   }
// // };

// // // Function to get all users
// // const getAllUsers = async () => {
// //   const query = `
// //     SELECT * FROM users;
// //   `;

// //   try {
// //     const result = await pool.query(query);
// //     return result.rows;
// //   } catch (err) {
// //     console.error('Error getting all users:', err.message);
// //     throw err;
// //   }
// // };

// // // Function to update a user by ID
// // const updateUserById = async (id, username, email, password) => {
// //   const hashedPassword = await bcrypt.hash(password, 10);
// //   const query = `
// //     UPDATE users
// //     SET username = $1, email = $2, password = $3
// //     WHERE id = $4
// //     RETURNING *;
// //   `;
// //   const values = [username, email, hashedPassword, id];

// //   try {
// //     const result = await pool.query(query, values);
// //     return result.rows[0];
// //   } catch (err) {
// //     console.error('Error updating user:', err.message);
// //     throw err;
// //   }
// // };

// // // Function to delete a user by ID
// // const deleteUserById = async (id) => {
// //   const query = `
// //     DELETE FROM users
// //     WHERE id = $1;
// //   `;
// //   const values = [id];

// //   try {
// //     await pool.query(query, values);
// //     return `User with ID ${id} deleted successfully`;
// //   } catch (err) {
// //     console.error('Error deleting user:', err.message);
// //     throw err;
// //   }
// // };

// // module.exports = {
// //   createUser,
// //   getUserById,
// //   getAllUsers,
// //   updateUserById,
// //   deleteUserById,
// // };


// const { Pool } = require('pg');
// require('dotenv').config({ path: 'config.env' });

// const pool = new Pool({
//   user: process.env.DB_USER, // Use environment variables
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// const createUser = async (username, email, password) => {
//   const query = `
//     INSERT INTO users (username, email, password)
//     VALUES ($1, $2, $3)
//     RETURNING *;
//   `;
//   const values = [username, email, password];

//   try {
//     const result = await pool.query(query, values);
//     return result.rows[0];
//   } catch (err) {
//     console.error('Error creating user in database:', err); // Log detailed error
//     throw err; // Rethrow error for handling in the controller
//   }
// };

// module.exports = {
//   createUser,
//   // Other functions
// };

//code test
// const { Pool } = require('pg');
// require('dotenv').config({ path: 'config.env' });

// const pool = new Pool({
//   user: process.env.DB_USER, // Ensure these are set in your .env file
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// const createUser = async (username, email, password) => {
//   const query = `
//     INSERT INTO users (username, email, password)
//     VALUES ($1, $2, $3)
//     RETURNING *;
//   `;
//   const values = [username, email, password];

//   try {
//     const result = await pool.query(query, values);
//     return result.rows[0];
//   } catch (err) {
//     console.error('Error creating user in database:', err);
//     throw err;
//   }
// };

// // Export functions
// module.exports = {
//   createUser,
//   // Add other functions here
// };
const pool = require('../Config/db');

const User = {
  create: async (data) => {
    const { username, password } = data;
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, password]
    );
    return result.rows[0];
  },
  
  // يمكن إضافة المزيد من الدوال مثل findUserById, findUserByUsername, إلخ.
};

module.exports = User;
