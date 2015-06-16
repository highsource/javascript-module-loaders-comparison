/// <reference path="Messenger.ts" />
module Greets {
    // Autosuggest for Messenger without any tags
    // When the class is empty, correct error message that sendMessage is not implemented
    // But no autosuggest (Ctrl+1) to implement it 
    export class ConsoleMessenger implements Messenger {
        // No autosuggest on "send
        sendMessage(message: string) {
            // Autocompletion for console.log works fine
            console.log(message);
        }
    }
}