const mongo = require('mongoose')

require('dotenv').config()

mongo.connect(`${process.env.HOST_MONGO}`,{useUnifiedTopology:true,useNewUrlParser:true})

const schema =new Schema {
    task_Name:String,
    study_time:Number,
    day:Number,
    Month:Number,
    Year:Number
}

const TODO = mongo.model('TODO',schema)

module.exports = TODO