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

  // workin
  app.post("/api/comments", (req, res) => {
    db.Comments.create(req.body)
      .then(dbComments => {
        res.json(dbComments);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // workin
  app.delete("/api/comments/:id", (req, res) => {
    db.Comments.findByIdAndDelete(req.params.id)
      .then(data => {
        if(!data){
          return res
            .status(404)
            .send(`Comment with Id of ${req.params.id} could not be found.`)
        }

        return res.json(data)
      })
      .catch(err => console.log(err));  
    
  })
}