const app = require('express')()

const route = require('./route/route')

app.use(route)

app.listen(process.env.PORT,()=>{
    console.log(`running at port ${process.env.PORT}`)
})
