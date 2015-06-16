var Greets;
(function (Greets) {
    var Recipient = (function () {
        // On "string" autosuggest String
        // consrt - no "constructor" autosuggestion
        function Recipient(title) {
            // Autosuggest on this.title works
            // Autosuggest on title worls
            // Refactoring title (field) -> title1 failed
            // Refactoring title (parameter) -> title1 failed
            this.title = title;
        }
        // No autosuggest on getT
        Recipient.prototype.getTitle = function () {
            // Open definition on this.title does not work
            return this.title;
        };
        return Recipient;
    })();
    Greets.Recipient = Recipient;
})(Greets || (Greets = {}));
/// <reference path="Recipient.ts" />
var Greets;
(function (Greets) {
    var Greeting = (function () {
        function Greeting(message, title, messenger) {
            this.message = message;
            this.recipient = new Greets.Recipient(title);
            this.messenger = messenger;
        }
        Greeting.prototype.getGreeting = function () {
            return this.message + ", " + this.recipient.getTitle();
        };
        // No support for writing JSDoc
        /**
         * Greets.
         */
        Greeting.prototype.greet = function () {
            this.messenger.sendMessage(this.getGreeting());
        };
        return Greeting;
    })();
    Greets.Greeting = Greeting;
})(Greets || (Greets = {}));
/// <reference path="../../typings/jquery/jquery.d.ts" />
var Greets;
(function (Greets) {
    var MsgDivMessenger = (function () {
        function MsgDivMessenger() {
        }
        MsgDivMessenger.prototype.sendMessage = function (message) {
            // When reference to jquery is added, autocompletion works
            $('#msg').text(message);
        };
        return MsgDivMessenger;
    })();
    Greets.MsgDivMessenger = MsgDivMessenger;
})(Greets || (Greets = {}));
/// <reference path="Greets/Greeting.ts" />
/// <reference path="Greets/MsgDivMessenger.ts" />
var greeting = new Greets.Greeting("Hello", "World", new Greets.MsgDivMessenger());
