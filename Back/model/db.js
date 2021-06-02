const mongo = require('mongoose')

require('dotenv').config()

mongo.connect(`${process.env.HOST_MONGO}`,{useUnifiedTopology:true,useNewUrlParser:true})

const Schema = mongo.Schema

const schema =new Schema ({
    id:Schema.ObjectId | Number,
    task_name:String,
    study_time:Number,
    day:Number,
    month:Number,
    year:Number
})

const TODO = mongo.model('TODO',schema)

module.exports = TODO