const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3030;
const path = require('path');
const sql = require('./db'); 
const crud = require('./crud');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('static'));


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');


app.get("/", (req, res) => {
        res.render('sharedAcademy');
    // res.send(  "Welcome to web course" );
    
    // res.json({ message: "Welcome to web course example application." });
    });
app.get('/aboutUs', (req, res)=>{
    res.render('aboutUs');
});
app.get('/AddVideo', (req, res)=>{
    res.render('AddVideo');
});
app.get('/signUp', (req, res)=>{
    res.render('signUp');
    
});

app.post('/finishSignUp', crud.InsertStudent);
app.get('/signInAfter', crud.logIn);
app.post('/uploaded', crud.uploadVideo);



app.get('/signIn', (req, res)=>{
    res.render('signIn');
});
app.get('/electric', (req, res)=>{
    res.render('electric');
});
app.get('/industriel', (req, res)=>{
    res.render('industriel');
});
app.get('/psychology', (req, res)=>{
    res.render('psychology');
});
app.get('/madmah', (req, res)=>{
    res.render('madmah');
});
app.get('/showVid', (req, res)=>{
    res.render('showVid');
});
app.get('/electricHedva2', (req, res)=>{
    res.render('electricHedva2');
});




app.get('/exmple', (req, res)=>{
    res.render('exmple');
});








    





    

app.listen(port, () => {
    console.log("Server is running on port 3030."
    );
    });