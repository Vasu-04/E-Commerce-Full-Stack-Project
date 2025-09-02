const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    productId : {
        type  : String
    },
    quantity : {
        type : String,
        default : 1
    }
})

const cartModel = mongoose.model("cart",cartSchema)
module.exports = cartModel