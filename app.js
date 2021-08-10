const express = require('express')
const http = require('http')
const configure = require('./config')
const sockets = require('./services/sockets')
const routes = require('./routes')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server, {
  cors: { origin: '*' }
});

const PORT = 3001

configure(app)
sockets(io)
app.use('/api', routes)

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
})
