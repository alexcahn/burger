var orm = require("../config/orm")

// create the code that will call the ORM functions using burger specific input for the ORM

var burgers = {
	selectAll: function(fcallback){
		orm.selectAll("burgers", function(results){
			fcallback(results);
		});
    },
	insertOne: function (burgerName, fcallback){
        orm.insertOne("burgers", ["burger_name", "devoured"], [burgerName, false], function(results){
            fcallback(results)
        })
    }
}

module.exports = burgers;