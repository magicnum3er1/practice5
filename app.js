var express = require('express');
var app = express();

app.set("view engine", "ejs")


app.get('/', function(req, res){
    res.send('connected');
});


app.get('/home', function(req, res){
    res.render('home');
});

app.get('/page1', function(req, res){
    res.render('page1');
});




app.listen(3000, () => console.log('server connected'));