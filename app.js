var express = require('express');
var bodyParser = require('body-parser');
var BeGlobal = require('node-beglobal');
var _ = require('underscore')

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'XJJX8Pi4cFvUkaap%2FIIJzA%3D%3D'
});

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());


app.get('/', function(req, res) {
	
var allLanguages = beglobal.languages.all(function(err, results){
  if (err){
    return console.log(err);
  }
  // console.log(results);

  var uniqueLanguages = _.chain(results).pluck('from').uniq(true, function(item){return item.name}).value()
  // res.send(uniqueLanguages)
  // res.send(results.map(function(item){
    // return item.from.name
  // }))
  res.render('index', {
    languages: uniqueLanguages
  });
})


});


var server = app.listen(5609, function() {
	console.log('Express server listening on port ' + server.address().port);
});

app.post('/languages', function(req, res){
  
  var langCode = beglobal.languages.all(function(err, results){
    if (err){
    return console.log(err);
  }
  // var langFrom = filter

  // var langTo


  beglobal.translations.translate({
    text: 'hello', 
    from: 'en', 
    to: 'fra'
  },
    function(err, results) {
      if (err) {
        return console.log(err);
      }

      console.log(results);
    });
});
});  