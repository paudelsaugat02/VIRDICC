const express= require("express");
const bodyParser= require("body-parser");
const ejs= require("ejs");
const app= express();
const https= require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
})

app.get("/sign_in", function(req, res){
    res.render("sign_in");
})

app.get("/sign_up", function(req, res){
    res.render("sign_up");
})

app.listen("3000", function(){
    console.log("Server running at port 3000");
})