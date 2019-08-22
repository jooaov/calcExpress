
var config=require("../config")
app=config.app


app.get("/",(req,res)=>{
    res.render("index.ejs");
})


app.get("/calc/:values",(req,res)=>{
    //console.log(req.body)
    console.log(req.params.values)
    resposta=req.params.values
    exports.resposta

})