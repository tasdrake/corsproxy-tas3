'use strict';

var dotenv = require('dotenv').config();
var express = require('express');
var request = require('request');
var apiServerHost = process.env.apiServerHost;

var apikey = process.env.apikey;
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', function(req, res) {
  var url = apiServerHost + req.url + apikey;
  console.log(url);
  console.log(req.url);

  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
