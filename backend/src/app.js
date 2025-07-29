const express = require("express")
const cors = require("cors")
const app = express()
const SignUpRouter = require("./routes/SignUp.Router")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use("/SignUp",SignUpRouter)
module.exports = app