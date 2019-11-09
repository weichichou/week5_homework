const express = require('express')
const Movie = require('./movie/model')
const bodyParser = require('body-parser')
const movieRouter = require('./movie/router')

const app = express()

Movie
    .sync()
    .catch((error) => console.log(error))

app.use(bodyParser.json())
app.use(movieRouter)

const port = 4000
app.listen(port, () => console.log(`Listen on port ${port}`))