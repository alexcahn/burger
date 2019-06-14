var connection = require("./connection");

var orm = {
    selectAll: function(){
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    insertOne: function(){
        let queryString = "INSERT INTO burgers SET (burger_name=?, devoured=?)";


    },
    updateOne: function(){
        let queryString = "UPDATE burgers WHERE (burger_name=?, devoured=?)";

    }
}

module.exports = orm;