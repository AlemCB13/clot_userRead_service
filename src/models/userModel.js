const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const getUserDB = async (id) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  return rows.length ? rows[0] : null;
};

module.exports = { getUserDB };
