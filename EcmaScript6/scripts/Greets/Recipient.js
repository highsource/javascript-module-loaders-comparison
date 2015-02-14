import { Greets } from "Greets";

Greets.Recipient = function(title)
{
	this.title = title;
};
Greets.Recipient.prototype.getTitle = function ()
{
	return this.title;
};
var Recipient = Greets.Recipient;
export { Recipient };