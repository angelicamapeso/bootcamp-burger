const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handle routes with burger controller
app.use(require('./controllers/burgers_controller'));

//Dynamic port
const PORT = process.env.PORT || 3000;

//Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});