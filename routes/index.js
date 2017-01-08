var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/',function(req,res){
	res.render('site.html')
})

router.get('/getPicList',function(req,res){
	var picList = fs.readdirSync('public/gallery/');
	console.log(picList[0]);

	return res.send(picList);
})
router.get('/sendEmail',function(req,res){
	console.log('sendEmail was called');
	//proceed to get email contents then use nodemailer to send email
})

module.exports = router;