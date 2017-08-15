import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import SocketIO from 'socket.io'
import router from './api'

const port = process.env.PORT || 1337
const app = express()
const server = http.Server(app)
const io = new SocketIO(server)

io.on('connection', socket => {
  console.log('user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('add-message', message => {
    io.emit('message', {
      type: 'new-message',
      text: message
    })
  })
})

// configure app
app.use(morgan('dev')) // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

server.listen(port, () => {
  console.log(`[INFO] Listening on http://localhost:${port}`)
})
