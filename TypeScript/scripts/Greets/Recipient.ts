module Greets {
    export class Recipient {
        // No autosuggest for str
        // No autosuggest for priv
        // Shows error for , at the end (should be ;)
        private title: string;
        // On "string" autosuggest String
        // consrt - no "constructor" autosuggestion
        constructor(title: string) {
            // Autosuggest on this.title works
            // Autosuggest on title worls
            // Refactoring title (field) -> title1 failed
            // Refactoring title (parameter) -> title1 failed
            this.title = title;
        }
        // No autosuggest on getT
        getTitle(): string {
            // Open definition on this.title does not work
            return this.title;
        }
        // Formats invalid code
    }
}