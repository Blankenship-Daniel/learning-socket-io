import http from 'http'
import express from 'express'
import SocketIO from 'socket.io'

const app = express()
const server = http.Server(app)
const io = new SocketIO(server)

io.on('connection', socket => {
  console.log(socket)
})

export default io
