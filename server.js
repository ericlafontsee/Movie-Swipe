const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('./config/passport');
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Track login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://cr31293:thispasswordsucks@cluster0.ftj0e.mongodb.net/MovieMatch?retryWrites=true&w=majority`, 
{ useNewUrlParse: true, useUnifiedTopology: true });





// Starting Server 
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})
