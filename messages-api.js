const express = require('express')
const app = express()
const { Router } = express
const router = new Router()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

router.post('/messages', (req, res) => {
    console.log(req.body.text)
    res.send({
        message: "Message received loud and clear"
    })
})

app.use(router)

const port = 3000
app.listen(port, () => console.log(`Listen on port ${port}`))
