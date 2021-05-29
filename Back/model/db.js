const mongo = require('mongoose')


mongo.connect()
const schema = {
    Task_Name:String,
    study_time:Number,
    day:Number,
    Month:Number,
    Year:Number
}

//module.exports = schema