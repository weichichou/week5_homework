const express = require('express')

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const movieRouter = require('./movie/router')
app.use(movieRouter)

const port = 4000
app.listen(port, () => console.log(`Listen on port ${port}`))