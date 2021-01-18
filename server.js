const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// connect to mongoose
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://cr31293:thispasswordsucks@cluster0.ftj0e.mongodb.net/MovieMatch?retryWrites=true&w=majority`, 
{ useNewUrlParse: true, useUnifiedTopology: true });





// Starting Server 
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})
