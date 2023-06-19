const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

const  connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.mongoUri)
        console.log('mongo connected')
    }catch( error){
        console.log('mongo error')
    }
}

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "home"
    })
})
app.use('/products',productRoutes)
app.use('/orders', orderRoutes)

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({
        error: {
            message : error.message
        }
    })
})


module.exports = app;