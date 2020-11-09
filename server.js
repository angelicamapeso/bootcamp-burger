const express = require('express');

const app = express();

//Handle routes with burger controller
app.use(require('./controllers/burgers_controller'));

//Dynamic port
const PORT = process.env.PORT || 3000;

//Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});