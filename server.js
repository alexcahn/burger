const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//routes --orm
app.use(require('./controllers/burgers_controller'));

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});