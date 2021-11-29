const mongoose = require("mongoose")
const companySchema = new mongoose.Schema({
    company_name: {type:String, required:true},
    company_details: {type: String, required:true},
    founded_year: {type: Number, required:true},
    company_Type: {type: String, required:true},
    company_nationality:{type:String, required:true}
},{
 versionKey:false,
 timestamps:true   
})
module.exports = mongoose.model("company", companySchema)