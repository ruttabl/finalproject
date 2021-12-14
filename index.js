const express = require('express');

const app = new express();

//middleware function
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));


//route <url the client will use and how the server will respond when that url is requested>

// http methods: get() post() put() delete()
app.get('/', (req,res) => {
    res.render('index');
});

app.get('/shop', (req,res) => {
    res.render('shop');
});

app.get('/about', (req,res) => {
    res.render('about');
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {console.log(`Server started on PORT NO. ${PORT}`)});