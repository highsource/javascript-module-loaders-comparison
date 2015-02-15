goog.require("Greets");
//goog.require("$");
goog.provide("Greets.MsgDivMessenger");

Greets.MsgDivMessenger = function() {};
Greets.MsgDivMessenger.prototype.sendMessage = function(message)
{
	$('#msg').text(message);
};