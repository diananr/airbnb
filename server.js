var express = require("express");

var app = express();

app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/assets/"));

app.listen(3028 , function(){
  console.log("encendido");
});


