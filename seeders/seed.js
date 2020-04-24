let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio", {
  useNewUrlParser: true,
  useFindAndModify: false
})

let commentSeed = [
  {
    name: "Test1",
    text: "This is a Test Comment."
  },
  {
    name: "Test2",
    text: "This is another Test Comment."
  }
];

db.Comments.deleteMany({})
  .then(() => db.Comments.collection.insertMany(commentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })