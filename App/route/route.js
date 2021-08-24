const route = require('express').Router()
const cors = require('cors')


const index = require('./index')
const completeTask = require('./completeTasks')
const bodyParser = require('body-parser')

route.use(cors())
route.use(bodyParser.json())

route.use(index)
route.use(completeTask)

module.exports =  route