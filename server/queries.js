const Pool = require('pg').Pool
const pool = new Pool({
  user: 'kaditou',
  host: 'localhost',
  database: 'api',
  password: 'billo',
  port: 5432,
})