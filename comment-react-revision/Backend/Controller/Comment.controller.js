const express = require("express");
const router = express.Router();
const CommentSchema = require("../Schema/Comment.model");

router.post("/", async function (req, res)  {
  try {
    const comment = await CommentSchema.create(req.body);
    return res.status(200).send(comment);
  } catch (err) {
    return res.status(404).send({ err });
  }
});
router.get("/", async function(req, res)  {
  try {
    let comment = await CommentSchema.find();
    return res.status(500).send(comment);
  } catch (err) {
    return res.status(500).send({ err });
  }
});
router.get("/:id", async function(req, res)  {
  try {
    const comment = await CommentSchema.findById(req.params.id);
    return res.status(200).send(comment);
  } catch (err) {
    return res.status(404).send({ err });
  }
});
module.exports = router