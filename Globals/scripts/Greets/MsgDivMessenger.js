Greets.MsgDivMessenger = function() {};
Greets.MsgDivMessenger.prototype.sendMessage = function(message)
{
	$('#msg').text(message);
};