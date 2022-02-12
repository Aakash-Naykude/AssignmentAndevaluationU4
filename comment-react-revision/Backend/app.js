const express = require("express");
const app = express();
app.use(express.json());

let CommentSchema = require("./Controller/Comment.controller");
app.use("/comment", CommentSchema);

module.exports = app;
