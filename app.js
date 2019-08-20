const express=require("express");
const app=express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


app.use(express.static('static'));
app.listen(3000, function () {
    console.log("3000");
})


app.get("/",(req,res)=>{
    res.render("index.ejs");
})
