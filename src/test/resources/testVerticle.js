var eb = vertx.eventBus();

// User-defined data types go here.
var Person = require("Person");
// var Person = require.noCache("Person");

var initialize = function(data) {
    data.senders = [];

    for (var i=0; i<5; i++) {
        var sender = new Person();
        sender.firstName = "first" + i;
        sender.lastName = "last" + i;
        sender.email = sender.firstName + "@test.com";

        data.senders.push(sender);
    }
};

eb.consumer("com.test.js:100", function(pMessage) {
    var instance = pMessage.body();
    var data = instance.data;

    initialize(data);


    // Return the message body.
    pMessage.reply(data);
});

eb.consumer("com.test.js:200", function(pMessage) {
    var instance = pMessage.body();
    var data = instance.data;


    console.log("com.test.js:200: " + Person.bye());

    // Return the message body.
    pMessage.reply(data);
});

// Called when process verticle is undeployed.
exports.vertxStop = function() {
  console.log('JS verticle stopped.');
}