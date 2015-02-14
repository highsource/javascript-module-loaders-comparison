var Greets = require("Greets");
require("Greets/Recipient");

// Requires Greets
Greets.Greeting = function(message, title, messenger)
{
	this.message = message;
	// Requires Greets.Recipient
	this.recipient = new Greets.Recipient(title);
	this.messenger = messenger;
};
Greets.Greeting.prototype.getGreeting = function ()
{
	return this.message + ", " + this.recipient.getTitle() + "!";
};
Greets.Greeting.prototype.greet = function()
{
	this.messenger.sendMessage(this.getGreeting());
};