import config from'./utils/config'
import express from 'express'
import logger from './utils/logger'

const app = express()

app.use(logger.middleware)

const port = process.env.PORT

app.get('/', (req, res) => {
    logger.log.success('Calling Root')
    res.send({msg: 'Hello There!' })
})

app.listen(config.port)