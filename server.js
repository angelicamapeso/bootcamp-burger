const express = require('express');

const app = express();

//Dynamic port
const PORT = process.env.PORT || 3000;

//Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});