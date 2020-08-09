var twilio=require('twilio')
var accountSID='AC380294efac01e0eda50f958c3948a403'
var authToken='2a34c4a12732ae6f6abeae4e8e41c7fb'

var client = new twilio(accountSID,authToken)

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
         from: 'whatsapp:+14155238886',
         body: 'Hello Twilio',
         to: 'whatsapp:+918105261754'
       })
      .then(message => console.log(message.sid));