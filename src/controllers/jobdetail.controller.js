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
router.get("", async(req, res)=>{
    try{
        const job = await Job.find().lean().exec()
        res.status(201).send(job)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})
router.get("/:id", async(req, res)=>{
    try{
        const job = await Job.findById(req.params.id).lean().exec()
        res.status(201).send(job)
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