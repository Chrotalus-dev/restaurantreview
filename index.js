const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var pgpLib= require('pg-promise');

app.use(bodyParser.urlencoded);
