const express = require("express")
const router = express.Router()
const Company = require("../models/company.model")
router.post("", async(req, res)=>{
    try{
        const comp = await Company.create(req.body)
        res.status(201).send(comp)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})
router.get("", async(req, res)=>{
    try{
        const comp = await Company.find().lean().exec()
        res.status(201).send(comp)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})
router.get("/:id", async(req, res)=>{
    try{
        const comp = await Company.findById(req.params.id).lean().exec()
        res.status(201).send(comp)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})
router.patch("/:id", async(req, res)=>{
    try{
        const comp = await Company.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec()
        res.status(201).send(comp)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})
router.delete("/:id", async(req, res)=>{
    try{
        const comp = await Company.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(comp)
    } catch(e){
        return res.status(500).send({message:e.message, Status: "Failed"})
    }
})

module.exports = router;