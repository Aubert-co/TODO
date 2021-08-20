const route = require('express').Router()
const cors = require('cors')
const body_P = require('body-parser')

const index = require('./index')
const completeTask = require('./completeTasks')

route.use(cors())
route.use(body_P.json())

route.use(index)
route.use(completeTask)

module.exports =  route