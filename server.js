const express = require('express');
// const session = require('express-session');
const path = require("path");
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

// Add routes, both API and view
app.use(routes);


// connect to mongoose
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.ftj0e.mongodb.net/MovieMatch?retryWrites=true&w=majority`, 
{ useNewUrlParse: true, useUnifiedTopology: true });

// Starting Server 
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})
