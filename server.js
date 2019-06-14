const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});