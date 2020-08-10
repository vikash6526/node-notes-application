var twilio = require('twilio')
var accountSID = 'XXX'
var authToken = 'XXX'

var client = new twilio(accountSID, authToken)

// client.messages.create({
//     body: 'Hello from NodeJs',
//     to: '+14379884119',  // Text this number
//     from: '+19388888727' // From a valid Twilio number
// })
// .then((message) => console.log(message.sid));

// client.calls
//   .create({
//     url: 'http://demo.twilio.com/docs/voice.xml',
//     to: '+14379884119',
//     from: '+19388888727',
//   })
//   .then(call => process.stdout.write(call.sid));

client.messages
    .create({
        from: 'whatsapp:+112346789',
        body: 'Hello Twilio',
        to: 'whatsapp:+91123456789'
    })
    .then(message => console.log(message.sid));