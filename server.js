const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.ftj0e.mongodb.net/MovieMatch?retryWrites=true&w=majority`, 
{ useNewUrlParse: true, useUnifiedTopology: true });

// Starting Server 
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})
