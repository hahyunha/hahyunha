const sql = require('./db');
const InsertStudent = (req,res)=>{

    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty"
        });
        return;
    }
    const NewStudentEntry = {
        "first_name" : req.body.fname,
        "last_name" : req.body.lname,
        "email" : req.body.emailSub,
        "password" : req.body.password,
    }
    const Q1 = "INSERT INTO MyCustomers SET ?";
    sql.query(Q1, NewStudentEntry, (err, mysqlres)=>{
        if (err) {
            res.status(400).send({message: "error om creating customer " + err});
            console.log("error om creating customer " + err);
            return;            
        }
        res.render('finishSignUp', { var1: "created student successfuly" });
       
        return;
    });
};

//logIn
const logIn = (req,res)=>{
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty"
        });
        return;
    }
    const NewStudentEntry = {
        "email" : req.body.emailE,
        "password" : req.body.passwordE,

    }
      
    sql.query("SELECT * FROM MyCustomers where email=? and password=?",[req.body.emailE, req.body.passwordE], (err, mysqlres)=>{
        if (err) throw err;

        if (mysqlres.length > 0) {
        res.render('signInAfter', {
            var1: "logged in successfully " 
        });
}
        else {
             res.render('signInAfter', {
                var1: "GOT WRONG BABY " 
            });        }
    })




};







//uploadVideo
const uploadVideo = (req,res)=>{
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty"
        });
        return;
    }
    const NewStudentEntry = {
        "degree" : req.body.degree,
        "course" : req.body.course,
        "email" : req.body.email,
        "password" : req.body.password,

    }
    const Q1 = "INSERT INTO videos SET ?";
    sql.query(Q1, NewStudentEntry, (err, mysqlres)=>{
        if (err) {
            res.status(400).send({message: "error om creating customer " + err});
            console.log("error om creating customer " + err);
            return;            
        }
        console.log("created new VIDEO succesfully"+ mysqlres);
        res.render('uploaded', {
            var1: "video uploaded successfully " 
        });
        return;
    });
};

module.exports = {InsertStudent,logIn,uploadVideo}

