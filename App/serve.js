const app = require('express')()
const route = require('./route/route')

app.use(route)


app.listen(8080,()=>{
    console.log(`running at port 8080`)
})
