require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');



//INIT
const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



//Serves static assets if in prod
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

//view engine set up
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Static Folder
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/' , (req, res)=>{
    res.render('contact')
});

app.post('/send' , (req, res)=>{
    console.log(req.body);
    const output = `
    <p>Hello, you have a new prospect</p>
    <h3>Contact Details</h3>
        <ul>
            <li>name: ${req.body.name}</li>
            <li>email: ${req.body.email}</li>
            <li>phone: ${req.body.phone}</li>
        </ul>
`;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        // port: 587,

        service: '"Godaddy"',

        secure: false, // true for 465, false for other ports
        auth: {
            user: 'tim@proletdev.com', // generated ethereal user
            pass: process.env.password // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <tim@proletdev.com>', // sender address
        to: "timothy.j.ocampo@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            return console.log(error);
        }

       console.log(info);

    })


});


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log( `Server running on port ${port}` );
});
