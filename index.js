const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var pgp = require('pg-promise')();
var db = pgp(process.env.DATABASE_URL || {database: 'likeypixdb'});

app.use(bodyParser.urlencoded);

var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});

