
var express = require('express');
var bodyParser = require('body-parser');

var PORT = 8080;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require( "./app/routing/apiroutes" )(app);
require( "./app/routing/htmlroutes" )(app);

app.listen(PORT, function() {
    console.log("Server listening on port: " + PORT);
});