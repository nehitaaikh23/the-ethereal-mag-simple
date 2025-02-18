import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended :true}));

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs");
})

app.post("/search",(req,res) => {
    res.render("index.ejs");
})

app.get("/about",(req,res) => {
    res.render("about.ejs");
})

app.get("/contact",(req,res) => {
    res.render("contact.ejs");
})

app.post("/post", (req,res) => {
    
    res.render("index.ejs",{title : [req.body["blog-titles"]]});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})