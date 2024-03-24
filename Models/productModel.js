const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
     require: true
    }, 
  price: String,
  prdType: String,
  collectionName:String,

},{
    timestamp: true
})

module.exports = mongoose.model('Product', productSchema)