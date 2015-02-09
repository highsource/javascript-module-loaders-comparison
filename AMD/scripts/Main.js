define("Main", ["Greets", "Greets/Greeting", "Greets/ConsoleMessenger"], function(Greets)
{
	// Requires Greets.Greeting
	var greeting = new Greets.Greeting("Hello", "World", new Greets.ConsoleMessenger());
	return greeting;
});
