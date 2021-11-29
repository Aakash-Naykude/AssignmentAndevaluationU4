const mongoose = require("mongoose")
const jobSchema = new mongoose.Schema({
    company_name:{type:String, required:true},
    city:{type:String, required:true},
    skills:[{type:String, required:true},],
    notice_period:{type: String,required:true},
    no_of_openings:{type:Number, required:true},
    company_details:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"company"
    }
},{
    versionKey: false,
    timestamps:true
})
module.exports = mongoose.model("jobdetails", jobSchema)