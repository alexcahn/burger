var connection = require("./connection");

function printQuestionMarks(num) {
        var arr = [];

        for (var i = 0; i < num; i++) {
                arr.push("?");
        }

        return arr.toString();
}

function objToSql(ob) {
        // column1=value, column2=value2,...
        var arr = [];

        for (var key in ob) {
                arr.push(key + "=" + ob[key]);
        }

        return arr.toString();
}

var orm = {
        selectAll: function (tableName, fcallback) {


                let queryString = "SELECT * FROM " + tableName + ";";
                connection.query(queryString, function (err, result) {
                        if (err) throw err;
                        fcallback(result);
                });
        },
        insertOne: function (tableName, columns, values, fcallback) {
                let queryString = "INSERT INTO " + tableName;
                queryString += " (";
                queryString += columns.toString();
                queryString += ") ";
                queryString += "VALUES (";
                queryString += printQuestionMarks(values.length);
                queryString += ") ";
                connection.query(queryString, values, function (err, result) {
                        if (err) {
                                throw err
                        }
                        fcallback(result)
                })

                // }
                // updateOne: function() {
                //     let queryString = "UPDATE burgers WHERE (burger_name=?, devoured=?)";

                // }
        }
}
module.exports = orm;