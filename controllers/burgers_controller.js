const router = require('express').Router();
const burgers = require('../models/burger')



router.get('/', function(req, res) {
 
burgers.selectAll(function(response){
  res.render('index', {cahn: response })

})
  });

router.post("/create", function(req,res){
  burgers.insertOne(req.body.burger_name, function(response){

    console.log(response);
    res.redirect('/')
  })


} )


module.exports = router;