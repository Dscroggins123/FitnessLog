const router = require("express").Router();
let db = require("../models/schema");


router.get("/api/workouts",function(req,res){

db.find({}).then(data => {
res.json(data)
})

})

router.post("/api/workouts",function(req,res){
db.create(req.body).then(data=>{
res.json(data)
})
})


router.put("/api/workouts/:id", function(req,res){
console.log(req.body)
console.log(req.params.id)
    db.findByIdAndUpdate(
   {_id:req.params.id}, {
$push:{exercises:req.body}}).then(data=>{
res.json("Complete!")
}).catch(err=> console.log(err))

})




module.exports = router;