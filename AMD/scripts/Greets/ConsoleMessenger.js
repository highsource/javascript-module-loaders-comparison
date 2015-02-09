define("Greets/ConsoleMessenger", ["Greets"], function(Greets)
{
	Greets.ConsoleMessenger = function() {};
	Greets.ConsoleMessenger.prototype.sendMessage = function(message)
	{
		console.log(message);
	};
	return Greets.ConsoleMessenger;
});