function click() {
    console.log(this.innerText)
    document.getElementById("calculo").innerText=document.getElementById("calculo").innerText+this.innerText;
}

//function click2() {
//    console.log(this.getAttribute("value"))
//    document.getElementById("calculo").innerText=document.getElementById("calculo").innerText+this.getAttribute("value");
//}

function igual() {
    $.ajax({
        type:"GET",
        url:"/calc/"+document.getElementById("calculo").innerText
    }).done(function () {
        alert('enviou req para o server')
        window.location.href="http://localhost:4000/redirect"
    })
}



$(function () {
    $("button").click(click);
    //$("input").click(click2);
    $("#igual").click(igual);
    //$(document).ready(checarResposta)
})
//console.log(respostaServer)