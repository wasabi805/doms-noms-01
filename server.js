const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res)=>{
    res.send('Hello, this is the 1st, server route')
});

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
