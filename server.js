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

// POST TABLE REQUEST
app.post("/newTable", (req, res) => {
    console.log("Name of kid: " + req.body.formUserNameInput);
    console.log("Table Number: " + req.body.formNumberTableInput);
    console.log("Learn of Test type: " + req.body.formLearnTestRadio);

    // calculate table
    let t1 = req.body.formNumberTableInput * 1
    let t2 = req.body.formNumberTableInput * 2
    let t3 = req.body.formNumberTableInput * 3
    let t4 = req.body.formNumberTableInput * 4
    let t5 = req.body.formNumberTableInput * 5
    let t6 = req.body.formNumberTableInput * 6
    let t7 = req.body.formNumberTableInput * 7
    let t8 = req.body.formNumberTableInput * 8
    let t9 = req.body.formNumberTableInput * 9
    let t10 = req.body.formNumberTableInput * 10


    res.render('newTable', {
        userName: req.body.formUserNameInput,
        tableNum: req.body.formNumberTableInput,
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