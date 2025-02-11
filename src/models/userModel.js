const mysql = require("mysql2/promise");

class Database {
  constructor() {
    if (!Database.instance) {
      this.pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      Database.instance = this;
    }
    return Database.instance;
  }

  async getUser(id) {
    const [rows] = await this.pool.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  }
}

const dbInstance = new Database();

module.exports = {
  getUserDB: (id) => dbInstance.getUser(id),
};
