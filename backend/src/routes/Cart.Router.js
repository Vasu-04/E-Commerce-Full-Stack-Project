const express = require("express")
const cartModel = require("../models/cart.model")
const productModel = require("../models/product.model")
const router = express.Router()
router.get("/GetAllProduct",async (req,res)=>{
    const cartProducts = await cartModel.find()
    res.status(200).json({message:"data passes to cart page", cartProducts : cartProducts})
})
router.get("/getCartProductById/:id",async (req,res)=>{
    const cartContainsProduct = false
    const {id} = req.params
    const result = await cartModel.find()
    const out = result.filter(cartProduct => cartProduct.productId === id)
    if(out.length === 0) res.status(200).json({cartContainsProduct : false}) 
    else res.status(200).json({cartContainsProduct : true}) 
})
router.get("/getCartProductImage/:id",async (req,res)=>{

    const {id} = req.params
    console.log(id)
    const result = await productModel.findById(id)
    console.log("resres",result)
    res.status(200).json({cartProductFetched : result})
})
router.post("/GetCategoryCartData",async (req,res)=>{
    const {categoryFilter} = req.body
    const cartProducts = await cartModel.find()
    let categoryCartProducts = []
    for (let index = 0; index < cartProducts.length; index++) {
        const element = cartProducts[index];
        const product = await productModel.findById(element.productId)
        if(product.category === categoryFilter) categoryCartProducts.push(product)
    }
console.log("categoryCartProducts",categoryCartProducts)
    res.status(200).json({message : "Data transferred to the frontend",categoryCartProducts:categoryCartProducts})
})
module.exports = router