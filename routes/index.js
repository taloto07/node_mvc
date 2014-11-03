var express = require('express');
var router = express.Router();

var Post = require('./../models/post');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/create-new-post', function(req, res){
	res.render('post_form');
});

router.post('/create-new-post', function(req, res){
	var post = new Post({
		title: req.body.title,
		body: req.body.body
	});

	post.save(function(err){
		if (err) console.log(err);
		else{
			console.log('success added to database...');
			res.redirect('/posts');
		}
			
	});
});

router.get('/posts', function(req, res){
	Post.find(function(err, posts){
		console.log(posts);
		res.render('all_posts', {posts: posts});
	});
});

module.exports = router;
