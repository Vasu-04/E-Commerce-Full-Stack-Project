const express = require("express")
const userModel = require("../models/user.model")
const cartModel = require("../models/cart.model")
const router = express.Router()

router.get("/:id",async (req,res)=>{
    const {id} = req.params
    const User = await userModel.findById(id)
    // console.log(User)
    res.status(200).json({message : "user find out",initial : User.name.trim().charAt(0)})
})

router.get("/theme/:id", async (req, res) => {
    const user = await userModel.findById(req.params.id);
    res.send({ theme: user.theme });
});

router.post("/theme/:id", async (req, res) => {
    const { theme } = req.body;
    await userModel.findByIdAndUpdate(req.params.id, { theme });
    res.send({ success: true });
});

router.post("/addToCart/:id",async (req,res)=>{
    const {id} = req.params
    const cartProduct = new cartModel({
        productId : id
    })
    await cartProduct.save()
    res.status(200).json({message : "product added to cart"})
})
module.exports = router