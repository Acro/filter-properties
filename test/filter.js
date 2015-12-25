var filter = require("../lib/filter.js")

var whitelist = [ "username" ]

var object = {
	username: "Acro",
	gender: "male"
}

console.log(filter(whitelist, object))

// { username: "Acro" }