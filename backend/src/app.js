const express = require("express")
const cors = require("cors")
const app = express()
const HomeRouter = require("./routes/Home.Router")
const SignUpRouter = require("./routes/SignUp.Router")
const SignInRouter = require("./routes/SignIn.Router")
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use("/SignUp", SignUpRouter)
app.use("/SignIn", SignInRouter)
app.use("/Home",HomeRouter)

module.exports = app