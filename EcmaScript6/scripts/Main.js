import { Greets } from "Greets";
import "Greets/Greeting";
import "Greets/ConsoleMessenger";

// Requires Greets.Greeting
var greeting = new Greets.Greeting("Hello", "World", new Greets.ConsoleMessenger());

export default greeting;
export var __useDefault = true;