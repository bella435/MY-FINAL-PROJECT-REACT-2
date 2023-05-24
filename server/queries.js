const Pool = require('pg').Pool
const pool = new Pool({
  user: 'kaditou',
  host: 'localhost',
  database: 'api',
  password: 'billo',
  port: 5432,
})

const getContact = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
module.exports = {
  getContact
}