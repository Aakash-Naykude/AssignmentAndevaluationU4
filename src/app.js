const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/naukari")
}

const companyController = require("./controllers/company.controller")
const jobController = require("./controllers/jobdetail.controller")
app.use("/company", companyController)
app.use("/jobdetails", jobController)

app.listen(2400, async function(){
    await connect()
    console.log("Listening on 2400 port")
})