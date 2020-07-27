const { env } = require('./../utils/env')

let host
let user
let password

if (env === 'dev') {
  host = 'localhost'
  user = 'root'
  password = '123456'
} else if (env === 'prod') {
  host = '94.191.66.15'
  user = 'root'
  password = '123456'
}

console.log(`${host}, ${user}, ${password}`)

module.exports = {
  host,
  user,
  password,
  database: 'book'
}