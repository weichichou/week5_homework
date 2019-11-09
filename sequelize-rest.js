const express = require('express')
const { db } = require('./db')
const bodyParser = require('body-parser')
const movieRouter = require('./movie/router')

const app = express()

db
    .sync()
    .catch((error) => console.error(error))

app.use(bodyParser.json())
app.use(movieRouter)

const port = 4000
app.listen(port, () => console.log(`Listen on port ${port}`))