function click() {
    console.log(this.innerText)
    document.getElementById("resp").innerText=document.getElementById("resp").innerText+this.innerText;
}

function click2() {
    console.log(this.getAttribute("value"))
    document.getElementById("resp").innerText=document.getElementById("resp").innerText+this.getAttribute("value");
}

function igual() {
    $.ajax({
        type:"GET",
        url:"/calc/"+document.getElementById("resp").innerText
    }).done(function () {
        alert(data)
        console.log(data)
    })
}

$(function () {
    $("button").click(click);
    $("input").click(click2);
    $("#igual").click(igual)
})