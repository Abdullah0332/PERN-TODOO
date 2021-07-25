const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "starc.abaa1",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
