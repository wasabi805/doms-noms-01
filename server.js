require('dotenv').config();

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const path = require('path');


//==========    Basic SendGrid Emailer     ==========
//see https://www.npmjs.com/package/@sendgrid/mail
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//
const msg = {
    to: process.env.SENDGRID_EMAIL,
    from: 'noreply@proletdev.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg);

//==========    ==========  =========   ==========

//INIT
const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('test'));


//Serves static assets if in prod
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log( `Server running on port ${port}` );
});

module.exports = router;