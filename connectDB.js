const mongoose = require('mongoose')
require('dotenv').config()

const connectToDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_URI)
        console.log("Connect to db is successful")
    } catch(error){
        console.log("Connection failed "+error.message)
    }
}

module.exports = connectToDB