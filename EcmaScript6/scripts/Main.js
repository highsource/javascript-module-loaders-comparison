import { Greets } from "Greets";
import { Greeting } from "Greets/Greeting";
import { ConsoleMessenger } from "Greets/ConsoleMessenger";

// Requires Greets.Greeting
var greeting = new Greets.Greeting("Hello", "World", new Greets.ConsoleMessenger());

export default greeting;