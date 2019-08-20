function click() {
    console.log(this.innerText)
    document.getElementById("resp").innerText=document.getElementById("resp").innerText+this.innerText;
}

$(function () {
    $("button").click(click);
})