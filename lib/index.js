import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import router from './api'

const port = process.env.PORT || 1337
const app = express()

// configure app
app.use(morgan('dev')) // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

app.listen(port)
console.log(`Server running at http://localhost:${port}`)
