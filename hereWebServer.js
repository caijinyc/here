const express = require('express');
const app = express();
app.use(express.static('./build'));

const port = 3004;

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port + '\n');
});
