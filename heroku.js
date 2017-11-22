var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname + '/public'));

app.set ("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing")
}); 

app.get("/minimanote", function(req, res){
  res.render("index") 
});

app.get("/login", function(req, res){
  res.render("login")
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Heroku");
})
 