const db = require("../models");

module.exports = function (app) {

  // workin
  app.get("/api/comments", function(req, res){
    db.Comments.find({}).limit(20)
      .then(dbComments => {
        res.json(dbComments);
      })
      .catch(err => {
        res.json(err);
      })
  });

  // 
  app.post("/api/comments", (req, res) => {
    db.Comments.create(req.body)
      .then(dbComments => {
        res.json(dbComments);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // must add the correct passNumber for deletion to occur
  // pass id of Comment in req.body 
  // ??? do deletes have a body?
  app.delete("/api/comments/:passNumber", (req, res) => {
    console.log(req.params.passNumber)
    if(req.params.passNumber === "292"){
      return db.Comments.findByIdAndDelete(req.body.id)  
    }
    
    return res
      .status(403)
      .send(`Incorrect passNumber given`)
    
  })
}