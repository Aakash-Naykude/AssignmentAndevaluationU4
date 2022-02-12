const mongoose = require("mongoose");
let commentSchema = new mongoose.Schema(
  {
    name: { type: "string" },
    comment: [{ type: "string" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model('newcomment', commentSchema);