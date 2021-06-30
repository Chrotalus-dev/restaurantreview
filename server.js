const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var pgp = require('pg-promise')();
var db = pgp(process.env.DATABASE_URL || {database: 'likeypixdb'});

// app.use(bodyParser.urlencoded);
app.use(express.static('public'));

app.get('/search?searchTerm=AmericanCuisine',function(req, res){
  res.send("tagID is set to " + req.params.name);
});

var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});

