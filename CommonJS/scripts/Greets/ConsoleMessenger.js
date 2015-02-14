var Greets = require("Greets");

Greets.ConsoleMessenger = function() {};
Greets.ConsoleMessenger.prototype.sendMessage = function(message)
{
	console.log(message);
};