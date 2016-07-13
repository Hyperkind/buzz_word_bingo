var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/buzzwords', function (req, res) {
  res.json(res.json);
});

app.route('/buzzword')
  .post(function (req, res) {
    console.log('post');
    var buzzWord = {
      buzzWord: req.body.buzzWord,
      points: req.body.points
    };
    console.log(buzzWord);
    res.send(req.body);
  })
  .put(function (req, res) {
    console.log('put');
    var updateWord = {
      buzzWord: req.body.buzzWord,
      points: req.body.points
    };
    console.log(updateWord);
    res.send(req.body);
  })
  .delete(function (req, res) {
    console.log('delete');
    var delWord = {
      buzzWord: req.body.buzzWord
    };
  });

app.post('/reset', function (req, res) {
  console.log('reset');
  var resetReq = {
    reset : req.body.reset
  };
  console.log(resetReq);
  res.send(req.body);
});

var server = app.listen(PORT, function () {
  var port = server.address().port;
  console.log('Server listening on port', port);
});
