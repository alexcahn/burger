const router = require('express').Router();
const burgers = require('../models/burger')

router.get('/', function (req, res) {
  burgers.selectAll(function (response) {
    res.render('index', { burgers: response })
  })
});

router.post("/burgers", function (req, res) {
  burgers.insertOne(req.body.burger_name, function (response) {
    res.redirect('/')
  })
})

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burgers.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});


module.exports = router;