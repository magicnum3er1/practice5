var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs")


app.get('/', function(req, res){
    res.send('connected');
});


app.get('/home', function(req, res){
    res.render('home');
});

app.get('/friends', function(req, res){
    var friends = ["czeslaw", "mietek", "maniek"];
    res.render('friends', {friends: friends});
});
// -------------------------------------------
// POST ROUTE 
// -----------------------------------------------

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    res.send("udalo ci sie wyslac date")
})




app.listen(3000, () => console.log('server connected'));