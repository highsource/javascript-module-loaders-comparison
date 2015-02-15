goog.require("Greets");
goog.require("Greets.Greeting");
goog.require("Greets.MsgDivMessenger");
goog.provide("greeting");

// Requires Greets.Greeting
greeting = new Greets.Greeting("Hello", "World", new Greets.MsgDivMessenger());
