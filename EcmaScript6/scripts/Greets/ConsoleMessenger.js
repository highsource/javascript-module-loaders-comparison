import { Greets } from "Greets";

Greets.ConsoleMessenger = function() {};
Greets.ConsoleMessenger.prototype.sendMessage = function(message)
{
	console.log(message);
};