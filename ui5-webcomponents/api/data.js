var response = require("http/v4/response");
var data = [{
	id: 1,
	firstName: "John",
	lastName: "Doe"
}, {
	id: 2,
	firstName: "Jakkie",
	lastName: "Doe"
}];

response.println(JSON.stringify(data));