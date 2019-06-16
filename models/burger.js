var orm = require("../config/orm")


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
    },

    updateOne: function(objColVals, condition, fcallback) {
        orm.updateOne('burgers', objColVals, condition, function(results) {
          fcallback(results);
        });
      }
    };

module.exports = burgers;