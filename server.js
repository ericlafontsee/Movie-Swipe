const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('./passport');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const User = require('./models/user');


// middleware
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Track login status
app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(passport.initialize())
app.use(passport.session())

app.use(routes);


// connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://cr31293:thispasswordsucks@cluster0.ftj0e.mongodb.net/MovieMatch?retryWrites=true&w=majority`, 
{ useNewUrlParse: true, useUnifiedTopology: true });



// Starting Server 
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})
