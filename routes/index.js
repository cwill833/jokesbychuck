var express = require('express');
var router = express.Router();
const request = require('request')
const rootURL = 'https://api.chucknorris.io/jokes/random'
const catURL = 'https://api.chucknorris.io/jokes/categories'
const randURL = 'https://api.chucknorris.io/jokes/random?category='

/* GET home page. */
// router.get('/', function(req, res, next) {
//   request(rootURL, function(err, response, body){
//     var chuck = JSON.parse(body)
//     res.render('index', { title: 'Chuck Norris Jokes', chuck
//     })
//   });
// });

router.get('/', function(req, res, next) {
  request(catURL, function(err, response, body){
    var categories = JSON.parse(body)
    res.render('index', { title: 'Chuck Norris Jokes', categories,
    joke: false
    })
  });
});

router.post('/', function(req, res, next){
  request(catURL, function(err, response, body){
    var categories = JSON.parse(body)
    var select = req.body.categorie
    var url = randURL + select
    // console.log(url)
    request(url, function(err, response, body){
      var joke = JSON.parse(body)
      res.render('index', {
        categories,
        select, 
        joke, 
        title: 'Chuck Norris Jokes'
      })
    })
  })
})

module.exports = router;
