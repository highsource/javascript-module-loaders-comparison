goog.require("Greets");
goog.provide("Greets.Recipient");

Greets.Recipient = function(title)
{
	this.title = title;
};
Greets.Recipient.prototype.getTitle = function ()
{
	return this.title;
};