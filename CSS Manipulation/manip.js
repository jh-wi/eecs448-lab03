document.addEventListener("DOMContentLoaded", () => {
    let change = document.querySelector("#change");

    let borderr = document.querySelector("#borderr");
    let borderg = document.querySelector("#borderg");
    let borderb = document.querySelector("#borderb");
    let borderw = document.querySelector("#borderw");

    let backgroundr = document.querySelector("#backgroundr");
    let backgroundg = document.querySelector("#backgroundg");
    let backgroundb = document.querySelector("#backgroundb");

    let body = document.getElementById("paragraph");

    body.style.borderStyle = "solid";

    change.addEventListener("click", (e) => {
        
        body.style.borderColor = "rgb("+borderr.value+","+borderg.value+","+borderb.value+")";
        body.style.backgroundColor = "rgb("+backgroundr.value+","+backgroundg.value+","+backgroundb.value+")";
        body.style.borderWidth = borderw+"px";
    });
});