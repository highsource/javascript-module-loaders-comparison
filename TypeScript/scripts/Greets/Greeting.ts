/// <reference path="Recipient.ts" />
module Greets {
    export class Greeting {
        private message: string;
        private recipient: Recipient;
        private messenger: Messenger;
        constructor(message: string, title: string, messenger: Messenger) {
            this.message = message;
            this.recipient = new Recipient(title);
            this.messenger = messenger;
        }
        private getGreeting(): string {
            return this.message + ", " + this.recipient.getTitle();
        }
        // No support for writing JSDoc
        /**
         * Greets.
         */
        greet() {
            this.messenger.sendMessage(this.getGreeting());
        }
    }
}