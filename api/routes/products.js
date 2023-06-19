const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('./models/product')

router.use(express.json())
router.use(express.urlencoded({extencded: true}))

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message : 'Handling Get reqs to /products'
    })
})

router.post('/', (req,res,next)=>{
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })
    product
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err))
    res.status(201).json({
        message : 'Handling Post reqs to /products'
    })
})

router.patch('/:productId', (req,res,next)=>{
    res.status(200).json({
        message : 'Deleted updated'
    })
})
router.delete('/:productId', (req,res,next)=>{
    res.status(200).json({
        message : 'Deleted product'
    })
})
module.exports = router;