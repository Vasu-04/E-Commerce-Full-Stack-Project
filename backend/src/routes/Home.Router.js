const express = require("express")
const userModel = require("../models/user.model")
const router = express.Router()

router.get("/:id",async (req,res)=>{
    const {id} = req.params
    const User = await userModel.findById(id)
    // console.log(User)
    res.status(200).json({message : "user find out",initial : User.name.trim().charAt(0)})
})


module.exports = router