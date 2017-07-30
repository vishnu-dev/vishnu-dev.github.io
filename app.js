const express = require('express');  
var exphbs  = require('express-handlebars');
const app = express();  
const port = 8080;

//Handlebars init
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set Static Folder
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {  
  response.render("home");
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})
