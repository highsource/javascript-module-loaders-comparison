goog.require("Greets");
goog.provide("Greets.MsgDivMessenger");

Greets.MsgDivMessenger = function() {};
Greets.MsgDivMessenger.prototype.sendMessage = function(message)
{
	$('#msg').text(message);
};