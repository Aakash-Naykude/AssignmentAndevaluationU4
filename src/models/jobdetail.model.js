const mongoose = require("mongoose")
const jobSchema = new mongoose.Schema({
    company_name:{type:String, required:true},
    city:{type:String, required:true},
    skills:[{type:String, required:true},],
    notice_period:{type: String,required:true},
    no_of_openings:{type:Number, required:true},
    job_rating:{type:Number, required:true},
    work_from_home:{type:String, required:true, default:"No"},
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