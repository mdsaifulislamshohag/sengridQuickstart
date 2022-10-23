const sgMail = require('@sendgrid/mail');
const API_KEY =
    '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';
sgMail.setApiKey(API_KEY);

const msg = {
    to: 'mdsaifulislamshohag79@gmail.com', // Change to your recipient
    from: 'tech@ebaskat.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<h1>and easy to do anywhere, even with Node.js</h1>',
};

sgMail
    .send(msg)
    .then(response => {
        // console.log(response[0].statusCode);
        // console.log(response[0].headers);
    })
    .catch(error => {
        console.error(error);
    });