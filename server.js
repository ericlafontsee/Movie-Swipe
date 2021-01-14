const express = require('express');
const session = require('express-session');
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const app = express();
const PORT = process.env.PORT || 3001;
// Route requires
const user = require('./routes/user')
const path = require('path');

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
// Sessions



// Routes
app.use('/user', user);
app.get('*', (req, res) => {
  res.send(path.join(__dirname, './client/build/index.html'));
});

// Starting Server 
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})
