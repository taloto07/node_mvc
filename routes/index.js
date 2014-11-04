var express = require('express');
var router = express.Router();

var Post = require('./../models/post');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home', home: 'active'});
});

router.get('/create-new-post', function(req, res){
	res.render('post_form', { title: 'Create New Post', post: 'active' });
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
		res.render('all_posts', {posts: posts, title: 'All Posts', postsActive: 'active'});
	});
});

router.get('/post/:postId', function(req, res){
	// res.send(req.params.postTitle);
	Post.findOne({_id : req.params.postId}, function(err, post){
		res.render('post', { post : post, title: post.title});
	});
});

module.exports = router;
