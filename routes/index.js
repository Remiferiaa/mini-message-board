var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Test1",
    added: new Date().toLocaleString()
  },
  {
    text: "Hello World!",
    user: "Test2",
    added: new Date().toLocaleString()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages:messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: "Add your message"})
})

router.post('/new', function(req, res, next){
  messages.push({
    text:req.body.descrip,
    user:req.body.author,
    added: new Date().toLocaleString()
  })
  res.redirect('/')
})


module.exports = router;
