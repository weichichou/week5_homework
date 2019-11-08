const express = require('express')

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const port = 4000
app.listen(port, () => console.log(`Listen on port ${port}`))