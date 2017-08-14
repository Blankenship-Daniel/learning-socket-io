import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import router from './api'
import io from './socket'

const port = process.env.PORT || 1337
const app = express()
const server = http.Server(app)

// configure app
app.use(morgan('dev')) // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

server.listen(port, () => {
  console.log(`[INFO] Listening on http://localhost:${port}`)
})
