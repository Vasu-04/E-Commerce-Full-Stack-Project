const express = require("express")
const { route } = require("./Home.Router")
const productModel = require("../models/product.model")
const router = express.Router()

router.get("/",async (req,res)=>{
    const products = await productModel.find()
    res.status(200).json({message : "Data transferred to the frontend",products:products})
})
router.get("/AllCategoryData",async (req,res)=>{
    const {categoryFilter} = req.query
    console.log("req.query : ",req.query)
    console.log("category",categoryFilter)
    const products = await productModel.find()
    let categoryProducts = []
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if(element.category === categoryFilter) categoryProducts.push(element)
    }
    res.status(200).json({message : "Data transferred to the frontend",products:categoryProducts})
})
module.exports = router