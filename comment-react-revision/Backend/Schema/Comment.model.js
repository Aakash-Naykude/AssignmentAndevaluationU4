const mongoose = require("mongoose");
let commentSchema = new mongoose.Schema(
  {
    name: { type: String },
    comment: { type: String },
    replies: [{ type: String }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("newcomment", commentSchema);
