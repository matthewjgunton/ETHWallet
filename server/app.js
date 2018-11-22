var express = require("express");
var app = express();
var session = require('express-session');//to store information between links from user
var MongoStore = require('connect-mongo')(session);

app.use(session({//set up session to our specifications
  secret: 'secret',
  store: mongoStore,
  saveUninitialized: true,
  resave: true,
  cookie : { secure : false, maxAge : (2 * 60 * 60 * 1000) }
}));//for authenticating users

var bodyParser = require("body-parser");
app.use(bodyParser.json());//it now says body works

const rtReco = require("./routes/rtReco.js");
app.use("/reco", rtReco);

app.listen(5000);
console.log("lift off");
