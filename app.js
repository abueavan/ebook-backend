const express = require('express')
const router = require('./router')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', router)

const privateKey = fs.readFileSync('./https/book.eavan.site.key')
const certificate = fs.readFileSync('./https/book.eavan.site.crt')
const credentials = { 
  key: privateKey, 
  cert: certificate 
}
const httpsServer = https.createServer(credentials, app)
const SSLPORT = 18082

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen = app.listen(5000, function() {
  const { address, port } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})

httpsServer.listen(SSLPORT, function() {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT)
})