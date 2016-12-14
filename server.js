var express = require("express");
var app = express();

app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/assets"));

/*Heroku*/
app.set('port', (process.env.PORT || 3028));
app.get('/', function(request, response) {
  response.render("index.html");
});
// app.listen(3028 , function(){
//   console.log("encendido");
// });
app.listen(app.get('port'), function(){
  console.log("encendido");
});

