const express = require('express');
var bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//routes --orm
app.use(require('./controllers/burgers_controller'));

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});