const bodyParser=require("body-parser");
const express=require("express");
const app=express();
app.use(bodyParser.urlencoded({extended: true}))


app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/static/js'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
//
//console.log(__dirname)


app.use(express.static('static'));

app.listen(3000, function () {
    console.log("3000");
    //console.log(loopDeValoresParaIdentificar())
})

exports.app=app;


