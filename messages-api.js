const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const { Router } = express
const router = new Router()

app.use(bodyParser.json())

let limit = 0

router.post('/messages', (req, res) => {
    if(!req.body.text || req.body.text == ''){
        res.status(400).end()
    }else{
        limit += 1
        if(limit > 5){
            res.status(429).end()
        }else{
            console.log(req.body.text)
            res.status(200).send({
                message: "Message received loud and clear"
            })
        }  
    } 
})

app.use(router)

const port = 3000
app.listen(port, () => console.log(`Listen on port ${port}`))
