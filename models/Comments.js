// now using MongoDB Atlas
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please Enter a Name"
  },
  text: {
    type: String,
    trim: true,
    required: "Please Enter a Comment"
  }

});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;