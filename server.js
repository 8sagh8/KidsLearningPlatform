let express = require("express");
let exphbs = require('express-handlebars');
let bodyParser = require('body-parser');

let app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

// For Static files
app.use(express.static("public"));

// CREATING ROUTES //
app.get("/", (req, res) => {
    res.render('home');
});

app.get("/tableMath", (req, res) => {
    res.render('tableMath');
});

// These global variables are to get kid name and table Num
// It will calculate tables and store values globally
// later these values will be used to cross check the result

let userName = null;
let tableNum = null;

let t1 = null;
let t2 = null;
let t3 = null;
let t4 = null;
let t5 = null;
let t6 = null;
let t7 = null;
let t8 = null;
let t9 = null;
let t10 = null;

// POST TABLE REQUEST
app.post("/newTable", (req, res) => {
    userName = req.body.formUserNameInput;
    tableNum = req.body.formNumberTableInput;

    console.log("Name of kid: " + userName);
    console.log("Table Number: " + tableNum);
    console.log("Learn of Test type: " + req.body.formLearnTestRadio);

    // calculate table
    t1 = tableNum * 1
    t2 = tableNum * 2
    t3 = tableNum * 3
    t4 = tableNum * 4
    t5 = tableNum * 5
    t6 = tableNum * 6
    t7 = tableNum * 7
    t8 = tableNum * 8
    t9 = tableNum * 9
    t10 = tableNum * 10

    // if Learn then true , if Test then false
    let tableRadio = true;

    if (req.body.formLearnTestRadio == "Test") {
        tableRadio = false;
    }

    res.render('newTable', {
        userName: userName,
        tableNum: tableNum,
        tableRadio: tableRadio,
        t1: t1,
        t2: t2,
        t3: t3,
        t4: t4,
        t5: t5,
        t6: t6,
        t7: t7,
        t8: t8,
        t9: t9,
        t10: t10

    });
});

// POST TABLE RESULT 
app.post("/testResult", (req, res) => {

    let uv1 = req.body.uv1;
    let uv2 = req.body.uv2;
    let uv3 = req.body.uv3;
    let uv4 = req.body.uv4;
    let uv5 = req.body.uv5;
    let uv6 = req.body.uv6;
    let uv7 = req.body.uv7;
    let uv8 = req.body.uv8;
    let uv9 = req.body.uv9;
    let uv10 = req.body.uv10;

    // match the user result with original table
    let ur1 = false;
    let ur2 = false;
    let ur3 = false;
    let ur4 = false;
    let ur5 = false;
    let ur6 = false;
    let ur7 = false;
    let ur8 = false;
    let ur9 = false;
    let ur10 = false;

    let totalScore = 0;

    if (uv1 == t1) {
        ur1 = true;
        totalScore = totalScore + 1;
    }
    if (uv2 == t2) {
        ur2 = true;
        totalScore = totalScore + 1;
    }
    if (uv3 == t3) {
        ur3 = true;
        totalScore = totalScore + 1;
    }
    if (uv4 == t4) {
        ur4 = true;
        totalScore = totalScore + 1;
    }
    if (uv5 == t5) {
        ur5 = true;
        totalScore = totalScore + 1;
    }
    if (uv6 == t6) {
        ur6 = true;
        totalScore = totalScore + 1;
    }
    if (uv7 == t7) {
        ur7 = true;
        totalScore = totalScore + 1;
    }
    if (uv8 == t8) {
        ur8 = true;
        totalScore = totalScore + 1;
    }
    if (uv9 == t9) {
        ur9 = true;
        totalScore = totalScore + 1;
    }
    if (uv10 == t10) {
        ur10 = true;
        totalScore = totalScore + 1;
    }


    // sending result to result Page
    res.render('testResult', {
        userName: userName,
        tableNum: tableNum,
        totalScore: totalScore,
        t1: t1,
        t2: t2,
        t3: t3,
        t4: t4,
        t5: t5,
        t6: t6,
        t7: t7,
        t8: t8,
        t9: t9,
        t10: t10,
        uv1: uv1,
        uv2: uv2,
        uv3: uv3,
        uv4: uv4,
        uv5: uv5,
        uv6: uv6,
        uv7: uv7,
        uv8: uv8,
        uv9: uv9,
        uv10: uv10,
        ur1: ur1,
        ur2: ur2,
        ur3: ur3,
        ur4: ur4,
        ur5: ur5,
        ur6: ur6,
        ur7: ur7,
        ur8: ur8,
        ur9: ur9,
        ur10: ur10

    });
});

app.get("/arithmeticMath", (req, res) => {
    res.render('arithmeticMath');
});

app.get("/algebraMath", (req, res) => {
    res.render('algebraMath');
});

// PORT and listening port
let HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, () => {
    console.log("App is working at PORT: " + HTTP_PORT);
})