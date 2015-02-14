define("Main", ["Greets", "Greets/Greeting", "Greets/MsgDivMessenger"], function(Greets)
{
	// Requires Greets.Greeting
	var greeting = new Greets.Greeting("Hello", "World", new Greets.MsgDivMessenger());
	return greeting;
});
