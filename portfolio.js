const express = require('express');
const app = express();
const path = require("path");

const port = 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

app.get('/', (req, res) => {
    res.render("portfolio.ejs");
});

app.get('/skills', (req, res) => {
    res.render('skills.ejs');
});