import config from'./utils/config'
import express from 'express'

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send({msg: 'Hello There!' })
})

app.listen(config.port)