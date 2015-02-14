var Greets = require("Greets")
require("Greets/Greeting");
require("Greets/ConsoleMessenger");

// Requires Greets.Greeting
var greeting = new Greets.Greeting("Hello", "World", new Greets.ConsoleMessenger());

module.exports = greeting;