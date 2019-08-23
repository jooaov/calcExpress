var config=require("../index")
var server=require("../server/calcularValor")
var app=config.app
//var respostaDoServer=server.valorResposta
var respostaDoCliente
var respostaDoServer=server.valorResposta

app.get("/",(req,res)=>{
    res.render("index.ejs");
})


app.get("/calc/:values",(req,res)=>{
    respostaDoCliente=req.params.values
    console.log(respostaDoCliente)
    res.redirect("/redirect")
    exports.respostaDoCliente=req.params.values
})
 
app.get("/redirect",(req,res)=>{
    res.render("respostaPage.ejs",{respostaDoServer:respostaDoServer})
})

