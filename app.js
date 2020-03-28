var express = require("express");
var app = express();

// app SetUp
app.use(express.static(__dirname + "/assets"));
// app.use(express.static(__dirname + "/ServicesSection"));

app.set("view engine", "ejs");



app.get("/", function(req, res){
	res.render("index_mp_fullscreen_static");
});


//// LISTENER
app.listen(process.env.PORT || 3000, function() {
    console.log("Valrin is On ...");
});