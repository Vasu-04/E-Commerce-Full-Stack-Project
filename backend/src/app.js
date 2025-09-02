const express = require("express")
const cors = require("cors")
const app = express()
const morgan = require("morgan")
require("dotenv").config()
const HomeRouter = require("./routes/Home.Router")
const SignUpRouter = require("./routes/SignUp.Router")
const SignInRouter = require("./routes/SignIn.Router")
const GetdataRouter = require("./routes/Getdata.Router")
const productRouter = require("./routes/product.router")
const cartRouter = require("./routes/Cart.Router")
const productDetailRouter = require("./routes/productDetail.router")
const indexRouter = require("./routes/index.router")
const path = require("path")
// app.use(cors())
app.use(cors(
    {
        origin: "https://e-commerce-full-stack-project-frontend.onrender.com",
        methods: ["GET", "POST", "PUT", "DELETE" , "PATCH"],
        credentials: true
    }
))
app.use(morgan("dev"))
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"../public")))
app.use("/product",productRouter)
console.log(process.env.MONGODB_URI)
app.use("/productDetail",productDetailRouter)
app.use("/",indexRouter)
app.use("/SignUp", SignUpRouter)
app.use("/SignIn", SignInRouter)
app.use("/Home",HomeRouter)
app.use("/Getdata",GetdataRouter)
app.use("/Cart",cartRouter)
module.exports = app