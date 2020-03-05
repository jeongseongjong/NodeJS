var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '반갑습네다' });
});

router.post('/insert',function(req,res){
})

router.get('/hello',function(req,res){
	//내용처리
	res.write("반가워")
	res.end()
})

module.exports = router;
