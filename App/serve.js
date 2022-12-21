const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const route = require('./api/route')
const cors = require('cors')


route.use(cors())
app.use(express.json())
app.use(route)



module.exports  = app