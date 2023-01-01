const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const route = require('./api/route')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(route)


app.listen(8080,()=>{
    console.log('rodando')
})
module.exports  = app