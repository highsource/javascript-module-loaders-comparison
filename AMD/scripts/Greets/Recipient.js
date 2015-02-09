define("Greets/Recipient", ["Greets"], function(Greets)
{
	Greets.Recipient = function(title)
	{
		this.title = title;
	};
	Greets.Recipient.prototype.getTitle = function ()
	{
		return this.title;
	};
	return Greets.Recipient;
});