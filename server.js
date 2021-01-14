const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const app = express();
const PORT = process.env.PORT || 3001;


// MIDDLEWARE
app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.ftj0e.mongodb.net/<dbname>?retryWrites=true&w=majority`, 
{ useNewUrlParse: true, useUnifiedTopology: true });


// Starting Server 
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})
