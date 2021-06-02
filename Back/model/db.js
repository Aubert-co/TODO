const mongo = require('mongoose')

require('dotenv').config()

mongo.connect(`${process.env.HOST_MONGO}`,{useUnifiedTopology:true,useNewUrlParser:true})

const Schema = mongo.Schema

const schema =new Schema ({
    id:Schema.ObjectId | Number,
    task_Name:String,
    study_time:Number,
    day:Number,
    Month:Number,
    Year:Number
})

const TODO = mongo.model('TODO',schema)

module.exports = TODO