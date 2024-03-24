const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()
app.use(express.json())

const connectToDB = require('./connectDB')

connectToDB()

const productModel = require('./Models/productModel')

app.post('/api/v1/products', async(req, res) =>{
    try{
        const{name,price,prdType,collectionName} = req.body
        const product = new productModel({
          name, price, prdType, collectionName
        })
        const data = await product.save()
        return res.status(200).json({
            msg: 'ok',
            data
        })
    }
    catch(error){
        return res.status(500).json({
            msg: error.message
          })
    }
})

app.get('/api/v1/products', async(req, res) =>{
    try{
        const data = await productModel.find()
        return res.status(200).json({
            msg: 'ok',
            data
        })
    }
    catch(error){
          return res.status(500).json({
            msg: error.message
          })
    }
})

const PORT = procss.env.PORT

app.listen(PORT, () =>{
    console.log("Server is running on port "+ PORT)
})