const express=require("express");
const hbs=require('hbs');
const app=express();
const path=require('path');
const port=process.env.PORT ||1000;
const static_path=path.join(__dirname);
const hbs_path=path.join(__dirname,"/templates/views");
const partial_path=path.join(__dirname,"/templates/partials");
app.set('view engine', 'hbs');
app.set("views",hbs_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));
app.get("/",(req,res)=>
{
    res.render('index.hbs');     
});
app.get("/weather",(rseq,res)=>
{
    res.render('weather.hbs');     
});
app.get("/about",(req,res)=>
{
    res.render('about.hbs');     
});
app.listen(port,()=>
console.log("connected...!")
);































