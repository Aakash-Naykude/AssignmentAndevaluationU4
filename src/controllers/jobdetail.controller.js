const express = require("express")
const router = express.Router()
const Job = require("../models/jobdetail.model")
router.post("", async(req, res)=>{
    try{
        const job = await Job.create(req.body)
        res.status(201).send(job)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})
router.get("", async (req, res)=>{
    try{
        const job = await Job.find().lean().exec()
        res.status(201).send(job)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})
router.get("/:id", async(req, res)=>{
    try{
        console.log(req.params.id)
        if(req.params.id == "mostjobs"){
            const job = await Job.find().sort({no_of_openings:-1}).populate("company_details").lean().exec()
            return res.status(201).send(job[0])
        } else if(req.params.id == "sortbyrating") {
            const job = await Job.find().sort({job_rating:-1}).populate("company_details").lean().exec()
            res.status(201).send(job)
        } else if(req.params.id == "workfromhome") {
            const job = await Job.find({work_from_home:{$eq:"Yes"}}).populate("company_details").lean().exec()
            res.status(201).send(job)
        } else if(req.params.id == "noticeperiod") {
            const job = await Job.find({notice_period:{$eq:"2 months"}}).populate("company_details").lean().exec()
            res.status(201).send(job)
        } else {
            const job = await Job.findById(req.params.id).lean().exec()
            res.status(201).send(job)
        }
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})




router.get("/:city/:name", async(req, res)=>{
    try{
        console.log(req.params.name,"Hi")
        const job = await Job.find({city:{$eq:req.params.name}}).populate("company_details").lean().exec()
        return res.status(201).send(job[0])
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})




router.get("/:id/companydetails", async(req, res)=>{
    try{
        const job = await Job.findById(req.params.id).populate("company_details").lean().exec()
        res.status(201).send(job)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})
router.patch("/:id", async(req, res)=>{
    try{
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec()
        res.status(201).send(job)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})
router.delete("/:id", async(req, res)=>{
    try{
        const job = await Job.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(job)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})



module.exports = router;