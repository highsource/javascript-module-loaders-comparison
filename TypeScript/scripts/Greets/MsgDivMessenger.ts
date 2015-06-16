/// <reference path="../../typings/jquery/jquery.d.ts" />
module Greets {
    export class MsgDivMessenger implements Messenger {
        sendMessage(message: string) {
            // When reference to jquery is added, autocompletion works
            $('#msg').text(message);
        }
    }
}