const route = require('express').Router()
const cors = require('cors')
const body_P = require('body-parser')

const index = require('./index')


route.use(cors())
route.use(body_P.json())

route.use(index)


module.exports =  route