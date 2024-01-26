var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// create app
const app = express()

app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }))

// connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var db = mongoose.connection; // Corrected this line

// check connection
db.on('error', () => console.log("Error in connecting"));
db.once('open', () => console.log("Connected to Database"));

app.post("/Login",(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var phone=req.body.phone;
    var password=req.body.password;

    // create object
    var data={
        "name":name,
        "email":email,
        "phone":phone,
        "password":password,

    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err)  throw err;
        console.log("Record insert Successfully");
    });
    return res.redirect("success")
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/success',(req,res)=>{
    res.render('signup_success')
})

app.listen(3000);