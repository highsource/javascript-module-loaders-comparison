goog.addDependency('../../../../scripts/Greets.js', ['Greets'], []);
goog.addDependency('../../../../scripts/Greets/Greeting.js', ['Greets.Greeting'], ['Greets', 'Greets.Recipient']);
goog.addDependency('../../../../scripts/Greets/MsgDivMessenger.js', ['Greets.MsgDivMessenger'], ['Greets']);
goog.addDependency('../../../../scripts/Greets/Recipient.js', ['Greets.Recipient'], ['Greets']);
goog.addDependency('../../../../scripts/Main.js', ['greeting'], ['Greets', 'Greets.Greeting', 'Greets.MsgDivMessenger']);
//goog.addDependency('https://code.jquery.com/jquery-2.1.3.min.js', ['$'], []);
