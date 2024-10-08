const pgp = require('pg-promise')();
const db = require('./server/Config/db'); // تأكد من أن المسار صحيح

const createTables = async () => {
  try {
    await db.none(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Tables created successfully!");
  } catch (error) {
    console.error("Error creating tables:", error);
  } finally {
    pgp.end(); // تأكد من إغلاق الاتصال
  }
};

createTables();
