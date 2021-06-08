const mongo = require('mongoose')

require('dotenv').config()

mongo.connect(`${process.env.HOST_MONGO}`,{useUnifiedTopology:true,useNewUrlParser:true})

const Schema = mongo.Schema

const schema =new Schema ({
    task_name:String,
    study_time:Number,

})

const TODO = mongo.model('tasks',schema)

module.exports = TODO