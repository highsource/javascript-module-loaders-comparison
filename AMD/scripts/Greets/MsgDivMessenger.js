define("Greets/MsgDivMessenger", ["Greets", "jquery"], function(Greets, $)
{
	Greets.MsgDivMessenger = function() {};
	Greets.MsgDivMessenger.prototype.sendMessage = function(message)
	{
		$('#msg').text(message);
	};
	return Greets.MsgDivMessenger;
});