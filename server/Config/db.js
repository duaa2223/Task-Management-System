// // // const { Pool } = require('pg');
// // // require('dotenv').config();

// // // const pool = new Pool({
// // //   user: process.env.DB_USER,
// // //   host: process.env.DB_HOST,
// // //   database: process.env.DB_NAME,
// // //   password: process.env.DB_PASSWORD,
// // //   port: process.env.DB_PORT,
// // // });

// // // module.exports = pool;

// // const pgp = require('pg-promise')();
// // require('dotenv').config(); // لقراءة متغيرات البيئة من ملف .env

// // // إعداد الاتصال بقاعدة البيانات
// // const db = pgp({
// //   host: process.env.DB_HOST,
// //   port: process.env.DB_PORT,
// //   database: process.env.DB_NAME,
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASSWORD
// // });

// // module.exports = db;



// // Config/db.js
// const { Pool } = require('pg');
// require('dotenv').config({ path: 'config.env' });

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   ssl: { rejectUnauthorized: false }, // Adjust if SSL is required
// });

// module.exports = pool;


// DB_USER=your_db_user
// DB_HOST=localhost
// DB_NAME=task_management
// DB_PASSWORD=your_db_password
// DB_PORT=5432
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = pool;
