var express = require('express');
var bodyParser = require('body-parser');
var BeGlobal = require('node-beglobal');

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'XJJX8Pi4cFvUkaap%2FIIJzA%3D%3D'
});

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
var languageArray= ["English", "Turkish","Spanish", "Bosnian"];

app.get('/', function(req, res) {
	res.render('index', {
    languages: languageArray
  });


});

var allLanguages = beglobal.languages.all(function(err, results){
  if (err){
    return console.log(err);
  }
  console.log(results);
})

var server = app.listen(5609, function() {
	console.log('Express server listening on port ' + server.address().port);
});


beglobal.translations.translate(
  {text: 'hello', from: 'eng', to: 'fra'},
  function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
  }
);