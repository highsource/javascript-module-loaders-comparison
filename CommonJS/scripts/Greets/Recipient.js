var Greets = require("Greets");

Greets.Recipient = function(title)
{
	this.title = title;
};
Greets.Recipient.prototype.getTitle = function ()
{
	return this.title;
};