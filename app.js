const express = require('express');  
const app = express();  
const port = 6000;

app.get('/', (request, response) => {  
  response.render("index.html");
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})
